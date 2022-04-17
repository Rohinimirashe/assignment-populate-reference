const newPublisherModel= require("../models/newPublisherModel")

const createPublisher= async function (req, res) {
    let data= req.body
    let savedData= await newPublisherModel.create(data)
    res.send({msg: savedData})
}

const getPublishersData= async function (req, res) {
    let allPublisher= await newPublisherModel.find()
    res.send({msg: allPublisher})
}

module.exports.createPublisher= createPublisher
module.exports.getPublishersData= getPublishersData