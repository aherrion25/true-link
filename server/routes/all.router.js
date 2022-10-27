const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/',(req,res) =>{
    let queryText = 'SELECT * FROM "person" WHERE "user_id"= $1;';
    pool.query(queryText, [req.user.id]).then((results) =>{
      res.send(results.rows)
    }).catch(error => {
      res.sendStatus(500)
    })
  })

  module.exports = router;