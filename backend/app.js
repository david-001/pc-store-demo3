const express = require("express");
const bodyparser = require("body-parser");
const pcPartsRoutes = require("./routes/pc-parts");
const mongoose = require("mongoose");

const app = express();

const dbConnectionString = "mongodb://localhost:27017/pc-store";
mongoose
    .connect(dbConnectionString)
    .then(()=>{
        console.log("Connected to database");
    })
    .catch((err)=>{
        console.log("Connection failed: " + err);
    });

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

// Problem app.use("api/pcparts",pcPartsRoutes);
app.use("/api/pcparts",pcPartsRoutes);

module.exports = app;