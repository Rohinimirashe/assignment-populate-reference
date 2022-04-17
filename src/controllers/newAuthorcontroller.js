const newAuthorModel= require("../models/newAuthorModel")

const createnewAuthor= async function (req, res) {
    let data= req.body
    let savedData= await newAuthorModel.create(data)
    res.send({msg: savedData})
}

const getnewAuthorData= async function (req, res) {
    let allnewAuthors= await newAuthorModel.find()
    res.send({msg: allnewAuthors})
}

module.exports.createnewAuthor= createnewAuthor
module.exports.getnewAuthorData= getnewAuthorData