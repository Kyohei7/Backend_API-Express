const model = require('../models')

// Create Data
function createDeveloper(req, res) {
    model.Developer.create({
        name: req.body.name,
        photo: req.body.photo,
        job: req.body.job,
        location: req.body.location,
        status: req.body.status,
        description: req.body.description,
        skill: req.body.skill,
        email: req.body.email,
        instagram: req.body.instagram,
        github: req.body.github,
        gitlab: req.body.gitlab,
        portfolio: req.body.portfolio,
        experience: req.body.experience
    })
    .then( function(result) {
        res.json(result)
    })
    .catch( function(error) {
        res.json({error: error})
    })
}

// Read Data
function readDeveloper(req, res) {
    model.Developer.findAll()
    .then( function(result) {
        res.json(result)
    })
    .catch( function(error) {
        res.json({error: error})
    })
}

// Update Data
function updateDeveloper(req, res) {
    model.Developer.update({
        name: req.body.name,
        photo: req.body.photo,
        job: req.body.job,
        location: req.body.location,
        status: req.body.status,
        description: req.body.description,
        skill: req.body.skill,
        email: req.body.email,
        instagram: req.body.instagram,
        github: req.body.github,
        gitlab: req.body.gitlab,
        portfolio: req.body.portfolio,
        experience: req.body.experience
    }, {
        where : {
            id: req.params.id
        }
    })
    .then( function(result) {
        res.send('Success to Update Data')
    })
    .catch( function(error) {
        res.json({error: error})
    })
}

// Delete Data
function deleteDeveloper(req, res) {
    model.Developer.destroy({
        where: {
            id: req.params.id
        }
    })
    .then( function(result) {
        res.send('Success to Delete Data')
    })
    .catch( function(error) {
        res.json({error: error})
    })
}

// Read Data by Name
function readDeveloperByName(req, res) {
    model.Developer.findAll({
        where: {
            name: req.params.name
        }
    })
    .then( function(result) {
        res.send('Success to Get Data by Name')
    })
    .catch( function(error) {
        res.json({error: error})
    })
}

// Read Data by Skill
function readDeveloperBySkill(req, res) {
    model.Developer.findAll({
        where: {
            skill: req.params.skill
        }
    })
    .then( function(result) {
        res.send('Success to Get Data by skill')
    })
    .catch( function(error) {
        res.json({error: error})
    })
}

// Read Data with Sort by Request
function sortDeveloperByRequest(req, res) {
    model.Developer.findAll({
        where: {
            name: req.params.name
        },
        order: [
            ['name', 'DESC']
        ],
        attributes: ['name']
    })
    .then( function(result) {
        res.send('Success to Sort Data by Name')
    })
    .catch( function(error) {
        res.json({error: error})
    })
}


module.exports = {
    createDeveloper,
    readDeveloper,
    updateDeveloper,
    deleteDeveloper,
    readDeveloperByName,
    readDeveloperBySkill,
    sortDeveloperByRequest,
}