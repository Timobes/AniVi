const multer = require('multer')

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        const name = file.originalname
        const index = name.indexOf('_')
        const rename = name.substring(0, index)

        console.log(rename)

        cb(null, `uploads/anime/${rename}`);
    },
    filename: (req, file, cb) =>{
        const name = file.originalname
        const index = name.indexOf('_')
        const rename = name.substring(index + 1, name.length)

        cb(null, rename);
    }
});

const upload = multer({storage: storageConfig})

module.exports = upload