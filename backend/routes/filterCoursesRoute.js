const router=require("express").Router()
const Course=require("../models/courseModel")

router.get("/filterCourses",async(req,res)=>{
    try{
        let subject=req.query.subject||"All"
        

        const subjectOptions=
        ["algebra",
        "chem",
        "bio",
        "calculus",
        "datastruc",
        "electricity",
        "fluid",
        "geometry"]
        subject ==="All"?(subject=[...subjectOptions]):(subject=req.query.subject.split(","))
        

        
        const courses= await Course.find().where("subject").in([...subject])

       
        const response={
            error:false,
            subject:subjectOptions,
            courses
        }
        res.status(200).json(response)



    }
    catch(err){
        console.log(err)
        res.status(500).json({error:true,message:"server error"})
    }
})



module.exports=router