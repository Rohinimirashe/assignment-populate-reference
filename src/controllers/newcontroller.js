const batches = require("../models/batches.js")
const developer = require("../models/developer.js")
// const newPublisher = require("../models/newPublisher.js")
// const createbatches = async function (req, res) {
//     let batch = req.body
//     let batchCreated = await batches.create(batch)
//     res.send({ data: batchCreated })
// }


// const createdeveloper = async function (req, res) {
//     let developer1 = req.body
//     let developercreated = await developer.create(developer1)
//     res.send({ data: developercreated })
// }


// const scholarship = async function (req, res) {
//     let value = await developer.find({gender: "female", percentage: {$gte: 70}})
//     res.send({ data: value })
// }

// const getdeveloper = async function (req, res) {
//     let getprogram= req.query.program
//     let getpercentage = req.query.percentage
//     let findbatchid = await batches.find({name: getprogram})
//     let eligible= await developer.find({batch: findbatchid, percentage:{$gte: getpercentage} })
//     res.send({ data: eligible })
// }


// module.exports.createbatches = createbatches
// module.exports.createdeveloper = createdeveloper
// module.exports.scholarship = scholarship
// module.exports.getdeveloper = getdeveloper


