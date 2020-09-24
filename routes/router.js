const router = require('express').Router()
const auth = require('../middlewares/auth')
const uploadImage = require('../middlewares/multer')
const user = require('../controller/user.controller')

const developer = require('../controller/developer.controller')
const company = require('../controller/company.controller')
const project = require('../controller/project.controller')
const projectDeveloper = require('../controller/project-developer.controller')
const portfolio = require('../controller/portfolio.controller')
const experience = require('../controller/experience.controller')

// USER
router.post('/user/login', user.loginUser)
router.post('/user/register', user.createUser)
router.get('/user', user.readUser)
router.put('/user/:id', auth, user.updateUser)
router.delete('/user/:id', auth, user.deleteUser)

// DEVELOPER
router.post('/developers', developer.createDeveloper)
router.get('/developers', developer.readDeveloper)
router.put('/developers/:id', developer.updateDeveloper)
router.delete('/developers/:id', developer.deleteDeveloper)
router.get('/developers/name/:name', developer.readDeveloperByName)
router.get('/developers/skill/:skill', developer.readDeveloperBySkill)
router.get('/developers/sortby/name/:name', developer.sortDeveloperByName)
router.get('/developers/sortby/skill/:skill', developer.sortDeveloperBySkill)

// COMPANY
router.get('/companys', company.readCompany)            
router.post('/companys', company.createCompany)        
router.put('/companys/:id', company.updateCompany)      
router.delete('/companys/:id', company.deleteCompany)


// PROJECT
router.get('/projects', project.readProject)
router.post('/projects', auth, uploadImage, project.createProject)
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