import multer from 'multer';
import path from 'path';

const FileUpload = (req, res) => {

    req.newFile_name = [];
    upload(req, res, async function (err) {
        if (err) {
            return res.json({ code: '500', message: 'err' })
        } else {       
            const files = req.files;
            let index, len;
            var filepathlist = []
            for (index = 0, len = files.length; index < len; ++index) {
                let filepath = process.env.IMAGEPREFIX + files[index].path.slice(4,);
                filepathlist.push(filepath)
            }
        }
    })
}

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './src/img');
    },
    filename: function (req, file, callback) {
        var file_name = file.fieldname + '-' + Date.now() + path.extname(file.originalname)
        req.newFile_name.push(file_name);
        callback(null, file_name);
    }
})

const upload = multer({
    storage: storage 
}).array('img', 5)
    
export default FileUpload;