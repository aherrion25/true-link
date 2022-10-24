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


/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  if (req.isAuthenticated()) {
    const queryText = `INSERT INTO "person" ("firstname", "lastname", "lastname_birth", "gender", "birth", "death", "birthpalace", "user_id" )
                        VALUES ($1,$2,$3,$4,$5,$6,$7,$8)`;
    pool.query(queryText[req.body.firstname, req.body.lastname,req.body.lastname_birth,req.body.gender,req.body.birth,req.body.death,req.body.birthplace,req.user.id])
    .then(() => {
        res.sendStatus(201);
    }).catch((error) => {
        res.sendStatus(500);
    })
  } else {
    res.sendStatus(403)
  }
});

module.exports = router;

