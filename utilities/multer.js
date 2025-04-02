const multer =require('multer')
const path =require('path')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'Media/')
    },
    filename: function (req, file, cb) {
       const ext =path.extname(file.originalname)
       cb(null, file.originalname + '-' + Date.now()+ext)
    }
  })
  
  const Media= multer({ storage: storage })
  module.exports =Media