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
        res.send({
            success: true,
            message: 'Sucess Create Data Developer',
            data: result
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Create Data Developer'
        })
        res.json({error: error})
    })
}

// Read Data
function readDeveloper(req, res) {
    model.Developer.findAll({
        limit: 2,
        offset: 1
    })
    .then( function(result) {
        res.send({
            success: true,
            message: 'Sucess Get Data Developer',
            data: result
        })
        res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Get Data Developer'
        })
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
        res.send({
            success: true,
            message: 'Success Update Data Developer',
            data: result
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Update Data Developer'
        })
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
        res.send({
            success: true,
            message: 'Success Delete Data Developer',
            data: result
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Delete Data Developer'
        })
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
        res.send({
            success: true,
            message: 'Success Get Data Developer by Name',
            data: result
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Get Data Developer by Name'
        })
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
        res.send({
            success: true,
            message: 'Success Get Data Developer by Skill',
            data: result
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Get Data Developer by Skill'
        })
        res.json({error: error})
    })
}

// Read Data with Sort by Name
function sortDeveloperByName(req, res) {
    model.Developer.findAll({
        order: [
            ['name', 'ASC']
        ],
        attributes: ['name', 'photo', 'job', 'location', 'status', 'description', 'skill', 'email', 'instagram', 'github', 'gitlab', 'portfolio', 'experience']
    })
    .then( function(result) {
        res.send({
            success: true,
            message: 'Success Sort Data Developer by Name',
            data: result
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Sort Data Developer by Name'
        })
        res.json({error: error})
    })
}

// Read Data with Sort by Skill
function sortDeveloperBySkill(req, res) {
    model.Developer.findAll({
        order: [
            ['skill', 'DESC']
        ],
        attributes: ['name', 'photo', 'job', 'location', 'status', 'description', 'skill', 'email', 'instagram', 'github', 'gitlab', 'portfolio', 'experience']
    })
    .then( function(result) {
        res.send({
            success: true,
            message: 'Success Sort Data Developer by Skill',
            data: result
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Sort Data Developer by Skill'
        })
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
    sortDeveloperByName,
    sortDeveloperBySkill,
}