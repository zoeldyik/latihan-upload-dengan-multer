const express = require('express');
const router = express.Router();
const multerConfig = require('../config/multer-config');


const upload = multerConfig.fields([
    { name: "img1", maxCount: 1 },
    { name: "img2", maxCount: 1 }
]);

router.get('/', (req, res) => {
    res.render('multi-fields', { msg: null });
})

router.post('/', (req, res) => {
    upload(req, res, (err) => {
        const files = req.files;

        if (err) {
            if (err == 'MulterError: File too large') {
                res.render("multi-fields", { msg: 'file terlalu besar' });
            } else {
                res.render('multi-fields', { msg: err });
            }
        } else {

            // entah kenapa multer tidak error walau user hanya mengisi 1 input
            // walau IF statement di bawah berfungsi tapi file tersebut tetap terupload, walau hanya ada 1 gambar
            // cek jika user lupa menginput file
            if (Object.keys(files).length !== 2) {
                return res.render('multi-fields', { msg: 'tidak ada gambar untuk di upload' });
            }

            console.log("upload multi fields berhasil")
            console.log(files);
            res.send(files)
        }
    })
})

module.exports = router;