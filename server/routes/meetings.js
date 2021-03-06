const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.use(express.json())

// GET /api/meetings
router.get('/', (req,res)=>{
  db.getMeetingHistory() //needs to output an array of meeting objects
  .then(meetings => {
    res.json(meetings)
  })
})


// POST /api/meetings
router.post('/', (req,res) => {
  console.log('routes save meeting by title', req.body)
  db.saveMeeting(req.body)
  .then(newMeetingId =>{
    console.log('routes newMeetingId', newMeetingId)
    res.json(newMeetingId)
  })
})

// GET /api/meetings/:id/users
router.get('/:id/users', (req,res)=>{
  const meetingId = req.params.id
  db.getUsersByMeetingId(meetingId) //needs to output an array of users objects
  .then(users => {
    res.json(users)
  })
})

// GET /api/meetings/:id
router.get('/:id', (req,res)=>{
  const meetingId = req.params.id
  db.getMeetingById(meetingId) //needs to output an array of meeting objects
  .then(meeting => {
    console.log(meeting)
    res.json(meeting)
  })
})

module.exports = router