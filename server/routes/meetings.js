const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.use(express.json())

router.get('/meetings', (req,res)=>{
  console.log('get all meetings')
  db.getMeetingHistory() //needs to output an array of meeting objects
  .then(meetings => {
    console.log('routes array of meetings', meetings)
    res.json(meetings)
  })
})

router.post('/meetings', (req,res) => {
  console.log('routes save meeting', req.body)
  db.saveMeeting(req.body)
  .then(newMeetingId =>{
    console.log('routes newMeetingId', newMeetingId)
    res.json(newMeetingId)
  })
})

router.get('/meetings/:id/users', (req,res)=>{
  console.log('get users by meeting id', req.params.id)
  db.getUsersByMeetingId() //needs to output an array of users objects
  .then(users => {
    console.log('routes array of users', users)
    res.json(meetings)
  })
})

module.exports = router