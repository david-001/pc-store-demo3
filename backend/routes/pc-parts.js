const express = require("express");
const PcPart = require("../models/pc-part");
const router = express.Router();

//POST
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

// router.post("",(req,res,next)=>{
//     res.status(201).send("Post message successful");
// });

// router.get("",(req,res,next)=>{
//     res.status(201).send("GET message successful");
// });

module.exports = router;