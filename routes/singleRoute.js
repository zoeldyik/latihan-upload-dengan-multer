const express = require('express');
const router = express.Router();
const multerConfig = require("../config/multer-config");

// set upload single file 
//  'img' adalah nama input file di view
const upload = multerConfig.single('img');

router.get("/", (req, res) => {
    res.render("single-upload", { msg: false });
})

router.post("/", (req, res) => {
    // cek jika user belum memilih gambar
    upload(req, res, (err) => {

        if (err) {
            if (err == 'MulterError: File too large') {
                res.render("single-upload", { msg: 'file terlalu besar' });
            } else {
                res.render("single-upload", { msg: err });
            }
        } else {
            if (req.file === undefined) {
                return res.render("single-upload", { msg: 'tidak ada gambar untuk di upload' });
            }
            console.log('berhasil upload single file, di bawah in log dari single route')
            console.log(req.file);
            res.send(req.file);
        }
    })

})

module.exports = router;