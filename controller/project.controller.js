const model = require('../models')


function createProject(req, res) {
    console.log(req.file) // check file
    model.Project.create({
        name: req.body.name,
        description: req.body.description,
        deadline: req.body.deadline,
        company: req.body.company,
        photo: req.file.originalname
    })
    .then( function(result) {
        res.send({
            success: true,
            message: 'Sucess Create Data Project',
            data: result
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Create Data Project'
        })
        res.json({error: error})
    })
}
function readProject(req, res) {
    model.Project.findAll()
    .then( function(result) {
        res.send({
            success: true,
            message: 'Sucess Get Data Project',
            data: result
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Get Data Project'
        })
        res.json({error: error})
    })

}
function updateProject(req, res) {
    model.Project.update({
        name: req.body.name,
        description: req.body.description,
        deadline: req.body.deadline,
        company: req.body.company,
        photo: req.body.photo
    }, {
        where: {
            id: req.params.id
        }
    })
    .then( function(result) {
        res.send({
            success: true,
            message: 'Sucess Update Data Project',
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Update Data Project'
        })
        res.json({error: error})
    })
}
function deleteProject(req, res) {
    model.Project.destroy({
        where: {
            id: req.params.id
        }
    })
    .then( function(result) {
        res.send({
            success: true,
            message: 'Sucess Delete Data Project',
        })
        res.status(201).res.json(result)
    })
    .catch( function(error) {
        res.send({
            success: false,
            message: 'Failed to Delete Data Project'
        })
        res.json({error: error})
    })
}


module.exports = {
    createProject,
    readProject,
    updateProject,
    deleteProject
}