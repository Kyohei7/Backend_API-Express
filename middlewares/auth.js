const jwt = require('jsonwebtoken')
const model = require('../models')


module.exports = (req, res, next) => {
    let token = req.headers.token

    if(token) {
        let verify = jwt.verify(token, 'rizki07')
        model.User.findOne({
            where: {
                id: verify.id
            }
        })
        .then (function(result) {
            if(result) {
                req.decoded = verify
                next()
            } else {
                res.status(401).json({
                    "message": "You Don't Have Access"
                })
            }
        })
        .catch(function(error) {
            res.json({error: error})
        })
    } else {
        res.status(401).json({
            "message": "Please Login First"
        })
    }
}