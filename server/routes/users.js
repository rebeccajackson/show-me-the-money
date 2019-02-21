const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.use(express.json())

router.get('/users', (req,res)=>{
  console.log('get all users')
  db.getAllUsers() //needs to output an array of users
  .then(users => {
    console.log('routes array of users', users)
    res.json(meetings)
  })
})