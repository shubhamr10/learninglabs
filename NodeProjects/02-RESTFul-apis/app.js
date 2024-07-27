const express = require("express");
const app = express();
const path = require("node:path")


const envFile = path.join(__dirname, ".env");
console.log(envFile);
require("dotenv").config({ path: envFile });

require("./libs/MongooseClient");
const indexRouter = require("./routes/indexRouter");

// to parse json and url encoded data query string
app.use(express.json());
app.use(express.urlencoded({ extended:false}));

app.use("/",  indexRouter);



module.exports = app;