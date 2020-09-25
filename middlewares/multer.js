const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads/')
    },
    filename: (req, file, callback) => {
        callback(null, file.fieldname + '-' + Date.now() + file.originalname)
    }
})

let upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        const ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    },
    limits:{
        fileSize: 1024 * 1024
    }
}).single('photo');

const uploadFilter = (request, response, next) => {
    
    upload(request, response, function (err) {
        if (err instanceof multer.MulterError) {

            response.status(400).send({
                success: false,
                message: err.message
            })
        } else if (err) {

            response.status(400).send({
                success: false,
                message: err.message
            })
        }
        next()
    })
}

module.exports = uploadFilter