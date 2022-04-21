const express = require('express');
const router = express.Router();

const controller1= require("../controllers/controller1.js")

const midi1 = function(req, res, next){

    const header = req.headers.isfreeappuser
    if(header){
        if(header === "true")
        req['isFreeAppUser'] = true
        if(header === "false")
        req['isFreeAppUser'] = false
    next()
    }
    else res.send({msg: "An usefull header is missing"})
    }

router.post("/createproduct", controller1.createproduct)
router.post("/createuser", midi1, controller1.createuser)
router.post("/createorder", midi1, controller1.createOrder)

// router.post("/createbatches", controller1.createbatches)
// router.post("/createdeveloper", newcontroller.createdeveloper)
// router.get("/scholarship-developers", newcontroller.scholarship)
// router.get("/getdeveloper", newcontroller.getdeveloper)

module.exports = router;