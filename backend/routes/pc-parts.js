const express = require("express");
const pcPart = require("../models/pc-part");
const PcPart = require("../models/pc-part");
const router = express.Router();

//POST http://localhost:3000/api/pcparts
router.post("",(req,res,next)=>{
    const pcPart = new PcPart({
        type: req.body.type,
        brand: req.body.brand,
        spec: req.body.spec,
        quantity: req.body.quantity,
        unit_cost: req.body.unit_cost,
    });
    pcPart.save().then(createdPart=>{
        res.status(201).json({
            message: "Pc Part successfully added.",
        
        });
    });
});

// http://localhost:3000/api/pcparts
router.get("",(req,res,next)=>{
    PcPart.find().then(documents=>{
        res.status(201).json({
            message: "PC parts fetched successfully!",
            pcParts: documents
        });
    });
});


router.delete("/:id",(req,res,next)=>{
    PcPart.deleteOne({_id:req.params.id}).then(result=>{
        console.log(result);
        res.status(201).json({message: "Pc part deleted."});
    })
})


// router.post("",(req,res,next)=>{
//     res.status(201).json("Post message successful ");
// });

// router.get("",(req,res,next)=>{
//     res.status(201).json("GET message successful");
// });

module.exports = router;