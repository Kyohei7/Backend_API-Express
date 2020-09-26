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
router.post('/developers', auth, uploadImage, developer.createDeveloper)
router.get('/developers', auth, developer.readDeveloper)
router.put('/developers/:id', auth, developer.updateDeveloper)
router.delete('/developers/:id', auth, developer.deleteDeveloper)
router.get('/developers/name/:name', auth, developer.readDeveloperByName)
router.get('/developers/skill/:skill', auth, developer.readDeveloperBySkill)
router.get('/developers/sortby/name/:name', auth, developer.sortDeveloperByName)
router.get('/developers/sortby/skill/:skill', auth, developer.sortDeveloperBySkill)

// COMPANY
router.get('/companys', auth, company.readCompany)            
router.post('/companys', auth, uploadImage, company.createCompany)        
router.put('/companys/:id', auth, company.updateCompany)      
router.delete('/companys/:id', auth, company.deleteCompany)


// PROJECT
router.get('/projects', auth, project.readProject)
router.post('/projects', auth, uploadImage, project.createProject)
router.put('/projects/:id', auth, project.updateProject)
router.delete('/projects/:id', auth, project.deleteProject)


// PROJECT_DEVELOPER
router.get('/project-developer', auth, projectDeveloper.readProjectDeveloper)
router.post('/project-developer', auth, projectDeveloper.createProjectDeveloper)
router.put('/project-developer/:id', auth, projectDeveloper.updateProjectDeveloper)
router.delete('/project-developer/:id', auth, projectDeveloper.deleteProjectDeveloper)

// PORTFOLIO
router.get('/portfolio', auth, portfolio.readPortfolio)
router.post('/portfolio', auth, portfolio.createPortfolio)
router.put('/portfolio/:id', auth, portfolio.updatePortfolio)
router.delete('/portfolio/:id', auth, portfolio.deletePortfolio)

// EXPERIENCE
router.get('/experience', auth, experience.readExperience)
router.post('/experience', auth, uploadImage, experience.createExperience)
router.put('/experience/:id', auth, experience.updateExperience)
router.delete('/experience/:id', auth, experience.deleteExperience)


module.exports = router