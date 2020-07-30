const express = require('express');
require('dotenv').config();
const app = express();

// ----- require routes
const single = require("./routes/singleRoute");
const multiFields = require("./routes/multi-Fields-Route");
const multiFiles = require("./routes/multi-Files-Route");
// ---------------------



app.use(express.urlencoded({ extended: true }))
app.use(express.static("./public"));
app.set("view engine", "ejs");


// ---set Routes
app.use("/", single);
app.use("/multi-files", multiFiles);
app.use("/multi-fields", multiFields);


app.listen(3000, () => console.log("app listen at localhost:3000"));