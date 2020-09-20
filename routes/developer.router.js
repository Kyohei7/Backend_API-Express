const router = require('express').Router()
const developerController = require('../controller/developer.controller')


router.post('/', developerController.createDeveloper)
router.get('/', developerController.readDeveloper)
router.put('/:id', developerController.updateDeveloper)
router.delete('/:id', developerController.deleteDeveloper)

router.get('/name/:name', developerController.readDeveloperByName)
router.get('/skill/:skill', developerController.readDeveloperBySkill)

router.get('/sortby/name/:name', developerController.sortDeveloperByName)
router.get('/sortby/skill/:skill', developerController.sortDeveloperBySkill)

module.exports = router