const router = require('express').Router()

const developer = require('../controller/developer.controller')
const developers = require('./developer.router')

const company = require('../controller/company.controller')

// DEVELOPER
router.use('/developers', developers)
router.get('/developer', developer.readDeveloper)                               // Read
router.post('/developer', developer.createDeveloper)                            // Create
router.put('/developer', developer.updateDeveloper)                             // Update
router.delete('/developer', developer.deleteDeveloper)                          // Delete
router.get('/developer', developer.readDeveloperByName)                         // getDatabyName
router.get('/developer', developer.readDeveloperBySkill)                        // getDatabySkill
router.get('/developer', developer.sortDeveloperByRequest)                      // sortDatabyName

// COMPANY
router.get('/companys', company.readCompany)            // Read
router.post('/companys', company.createCompany)         // Create
router.put('/companys/:id', company.updateCompany)      // Update
router.delete('/companys/:id', company.deleteCompany)   // Delete


module.exports = router