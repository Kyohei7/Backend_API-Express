const router = require('express').Router()

const developer = require('../controller/developer.controller')
const developers = require('./developer.router')
const company = require('../controller/company.controller')
const project = require('../controller/project.controller')
const projectDeveloper = require('../controller/project-developer.controller')
const portfolio = require('../controller/portfolio.controller')
const experience = require('../controller/experience.controller')


// DEVELOPER
router.use('/developers', developers)
router.get('/developer', developer.readDeveloper)                               // Read
router.post('/developer', developer.createDeveloper)                            // Create
router.put('/developer', developer.updateDeveloper)                             // Update
router.delete('/developer', developer.deleteDeveloper)                          // Delete
router.get('/developer', developer.readDeveloperByName)                         // getDatabyName
router.get('/developer', developer.readDeveloperBySkill)                        // getDatabySkill
router.get('/developer', developer.sortDeveloperByName)                         // sortDatabyName
router.get('/developer', developer.sortDeveloperBySkill)                        // sortDatabySkill


// COMPANY
router.get('/companys', company.readCompany)            // Read
router.post('/companys', company.createCompany)         // Create
router.put('/companys/:id', company.updateCompany)      // Update
router.delete('/companys/:id', company.deleteCompany)   // Delete


// PROJECT
router.get('/projects', project.readProject)
router.post('/projects', project.createProject)
router.put('/projects/:id', project.updateProject)
router.delete('/projects/:id', project.deleteProject)


// PROJECT_DEVELOPER
router.get('/project-developer', projectDeveloper.readProjectDeveloper)
router.post('/project-developer', projectDeveloper.createProjectDeveloper)
router.put('/project-developer/:id', projectDeveloper.updateProjectDeveloper)
router.delete('/project-developer/:id', projectDeveloper.deleteProjectDeveloper)

// PORTFOLIO
router.get('/portfolio', portfolio.readPortfolio)
router.post('/portfolio', portfolio.createPortfolio)
router.put('/portfolio/:id', portfolio.updatePortfolio)
router.delete('/portfolio/:id', portfolio.deletePortfolio)

// EXPERIENCE
router.get('/experience', experience.readExperience)
router.post('/experience', experience.createExperience)
router.put('/experience/:id', experience.updateExperience)
router.delete('/experience/:id', experience.deleteExperience)


module.exports = router