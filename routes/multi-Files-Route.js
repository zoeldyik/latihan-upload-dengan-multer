const express = require("express");
const router = express.Router();
const multerConfig = require("../config/multer-config");

const upload = multerConfig.array('images', 4);

router.get("/", (req, res) => {
    res.render('multi-files', { msg: null });
})


router.post("/", (req, res) => {

    upload(req, res, (err) => {
        const files = req.files;

        if (err) {
            if (err == 'MulterError: File too large') {
                res.render('multi-files', { msg: "file terlalu besar" });
            } else {
                res.render('multi-files', { msg: err });
            }
        } else {
            if (files.length === 0) {
                res.render('multi-files', { msg: 'tidak ada gambar untuk di upload' })
            } else {
                console.log("upload multi files berhasil")
                console.log("dibawah ini console lognya")
                console.log(files)
                res.send(files);
            }
        }
    })
})

module.exports = router;