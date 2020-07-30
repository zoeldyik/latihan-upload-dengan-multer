const multer = require('multer');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/img/")
    },
    filename: (req, file, cb) => {
        // set nama file yang akan di simpan
        const extFile = file.originalname.split(".").pop().toLowerCase();
        const namaFile = file.fieldname + "-" + Date.now() + "." + extFile;
        cb(null, namaFile);

    }
});


const upload = multer({
    storage,
    // limits satuannya adalah byte
    limits: { fileSize: 1000000 },
    fileFilter: (req, file, cb) => {
        const allowedExt = new RegExp('jpg|jpeg|png');
        const extFile = file.originalname.split(".").pop().toLowerCase();
        const mime = file.mimetype.split("/").pop().toLowerCase();
        const cekExt = allowedExt.test(extFile);
        const cekMime = allowedExt.test(mime);
        // cek cekExt dan cekMime 
        (cekExt && cekMime) ? cb(null, true) : cb('format file salah');
    }
});

module.exports = upload;