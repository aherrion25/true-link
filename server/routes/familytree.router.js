const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');
/**
 * GET route template
 */
router.get('/', async (req, res) => {
  // GET route code here
  if(req.isAuthenticated()) {
    let queryText = 'SELECT * FROM "person" WHERE "user_id"= $1 AND "root"=true';
    const result= await pool.query(queryText, [req.user.id]);
    const family = result.rows;
    for( let familyMember of family){
      queryText = `SELECT "person".* FROM "person"  
      JOIN "pairing" ON pairing.connection_id = person.id
      WHERE "connection_type_id" = 3 AND pairing.person_id = $1 AND "person"."user_id"= $2 AND "person"."root"=false; `;

      const children = await pool.query(queryText, [familyMember.id, req.user.id])
      familyMember.children = children.rows
  }


    res.send(family)

  } else {
    res.sendStatus(403);
  }

});

// get route for specific person
router.get('/:id',(req,res) => {
  if (req.isAuthenticated()) {
      const personId = req.params.id
      const queryText = `SELECT * FROM "person" WHERE "id"= $1`;
      pool.query(queryText,[personId]).then((results) => {
        if (results && results.rows.length > 0) {
          res.send(results.rows[0]);
        } else {
          res.sendStatus(404);
        }
      }).catch((error) => {
          res.sendStatus(500)
      })
    } else {
      res.sendStatus(403)
    }
});



router.get('/connection/:id', (req,res) => {
  if(req.isAuthenticated()) {
    const queryText = `SELECT "pairing"."id", "connection_type"."type", "person"."firstname", "person"."lastname" FROM "pairing" 
    JOIN "connection_type" ON "pairing"."connection_type_id" = "connection_type"."id"
    JOIN "person" ON "person"."id"= "pairing"."connection_id"
    WHERE "pairing"."person_id"=$1 ;`
    pool.query(queryText,[req.params.id]).then(results => {
      res.send(results.rows)
    }).catch(error => {
      res.sendStatus(500)
    })
  }
})


/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  if (req.isAuthenticated()) {
    const newPerson = req.body;
    console.log(req.user);
    console.log(req.body);
    const personQueryText = `INSERT INTO "person" ("firstname", "lastname", "lastname_birth", "gender", "birth", "death", "birthplace", "user_id" )
                        VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
                        RETURNING "id";`;
    const queryValues = [
      newPerson.firstname,
      newPerson.lastname,
      newPerson.lastname_birth,
      newPerson.gender,
      newPerson.birth,
      newPerson.death === ''? null : newPerson.death,
      newPerson.birthplace,
      req.user.id
    ]
    pool.query(personQueryText,queryValues)
    
    .then( result => {
      res.sendStatus(201);
    // catch errors for 1st query
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
  } else {
    res.sendStatus(403)
  }
});

router.post('/connection', (req,res) => {
  if(req.isAuthenticated){
  // 2nd query handles pairing references
  const pairinigQueryText = `INSERT INTO "pairing" ("person_id","connection_id","connection_type_id")
                    VALUES($1,$2,$3),($4,$5,$6);`;
    // Query for adding a pairing for new person
    let connection2 = 4;
    switch(req.body.connection_type_id){
      case 1:
        case 2:
        connection2= 3
        break;
        case 3:
          connection2= 1

    }
    pool.query(pairinigQueryText,[req.body.person_id, req.body.connection_id, connection2, req.body.connection_id,req.body.person_id,req.body.connection_type_id])
    .then(result => {
      res.sendStatus(201);
    }).catch(error => {
      // catch errors for 2nd query
      console.log(error);
      res.sendStatus(500)
    })
  }
});

router.put('/:id', (req, res) => {
  if(req.isAuthenticated){
   const queryText = `UPDATE "person" SET "firstname"=$1, "lastname"=$2,"lastname_birth"= $3,
                      "gender"= $4, "birth"=$5, "death"=$6, "birthplace"=$7
                      WHERE "id"=$8 AND "user_id"= $9;`;
  pool.query(queryText,[req.body.firstname, 
                        req.body.lastname,
                        req.body.lastname_birth,
                        req.body.gender,
                        req.body.birth,
                        req.body.death,
                        req.body.birthplace,
                        req.params.id,
                        req.user.id])
      .then(results => {
        res.sendStatus(200)
      }).catch(error => {
        console.log(error);
        res.sendStatus(500)
      })
  }
});

router.delete('/connection/:id', (req,res) => {
  if(req.isAuthenticated){
    const queryText = 'DELETE FROM "pairing" WHERE "id"=$1;';
    pool.query(queryText, [req.params.id])
        .then((results) => {
          res.sendStatus(200)
        }).catch((error) => {
          console.log('ERROR IN DELETE', error);
          res.sendStatus(500)
        })
  }
})


module.exports = router;

