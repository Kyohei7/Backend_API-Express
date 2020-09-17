const router = require('express').Router()
const developerController = require('../controller/developer.controller')


router.post('/', developerController.createDeveloper)
router.get('/', developerController.readDeveloper)
router.put('/:id', developerController.updateDeveloper)
router.delete('/:id', developerController.deleteDeveloper)

module.exports = router