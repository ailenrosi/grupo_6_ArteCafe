const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null,'/public/img/users_avatars')  //ubicacion para guardar los archivos
    },
    filename: function (req,file,callback) {
        const newFilename = 'avatar-' + Date.now() + path.extname(file.originalname);
        callback(null,newFilename); 
}});



const upload = multer({ storage: storage });



module.exports = upload;