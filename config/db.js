const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            console.log(err);
        }
        console.log('db connected');
    });