const router = require('express').Router()

const developer = require('../controller/developer.controller')
const developers = require('./developer.router')



router.use('/developers', developers)
router.get('/developer', developer.readDeveloper) // Read
router.post('/developer', developer.createDeveloper) // Create
router.put('/developer', developer.updateDeveloper) // Update
router.delete('/developer', developer.deleteDeveloper) // Delete


module.exports = router