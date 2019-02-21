const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.use(express.json())

// GET /api/meetings
router.get('/', (req,res)=>{
  console.log('get all users')
  db.getAllUsers() //needs to output an array of users
  .then(users => {
    console.log('routes array of users', users)
    res.json(users)
  })
})

module.exports = router