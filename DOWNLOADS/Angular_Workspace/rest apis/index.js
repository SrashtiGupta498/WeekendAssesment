const express = require('express');
const coursesRouter = require("./routes/courses");
const app =express();
const mongoose = require('mongoose') 
const url = 'mongodb://localhost/Courses'
const bodyParser = require('body-parser')
app.use(bodyParser.json())
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection;

con.on('open', () => {
    console.log('connected...')
})
app.use(express.json())
app.use("/api/v1/courses",coursesRouter);

app.listen(2000, ()=>{
    console.log("Server is running");
}); 
