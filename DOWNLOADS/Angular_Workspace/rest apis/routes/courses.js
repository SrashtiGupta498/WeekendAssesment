const ex = require("express");
const Course = require("../models/course")
// const {route} = require("express/lib/application");
const router = ex.Router();

//get all course
router.get("/",async(req,res)=>{
    try{
    const courses = await Course.find()
    res.json(courses)
    }catch(err)
    {
    res.json(error);
    }
});
//get single courses
router.get("/:courseId",async (req ,res)=>{
    const courseId = req.params.courseId
    try{
        const c= await Course.findById(courseId);
        res.json(c);
    }
    catch(error)
    {
        res.json(error);
    }    
});

    
//create course

router.post("/",async (req ,res)=>{
        const course=await Course.create(req.body);
        res.json(course);   
});

//delete course

 module.exports = router;
