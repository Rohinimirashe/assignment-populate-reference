const productss = require("../models/product.js")
const userss = require("../models/user.js")
const orderss = require("../models/order.js")
// const developer = require("../models/developer.js")

const createproduct = async function (req, res) {
        let product1 = req.body
        let productcreated = await productss.create(product1)
        res.send({ data: productcreated })
    }

    const createuser = async function (req, res) {
        let user1 = req.body
        let usercreated = await userss.create(user1)
        res.send({ data: usercreated })
    }
      
    const createOrder = async function (req, res){
        let freeUser = req.isFreeAppUser
        if(!req.body.userId && !req.body.productId) return res.send({msg: "uderId and productId is required"})
        let userbalance = await user.findOne({_id: req.body.userId}).select('balance')
        let productPrince = await product.findOne({_id: req.body.productId}).select('price')
        if(!freeUser && userbalance.balance >= productPrince.price){
            let newBalance = userbalance.balance - productPrince.price
            let orderData = await order.create({
                userId: req.body.userId,
                productId: req.body.productId,
                amount: productPrince.price,
                isFreeAppUser: false
            })
            await user.findOneAndUpdate({_id: req.body.userId}, {balance: newBalance})
            res.send({msg: orderData})
        }
        if(!freeUser && userbalance.balance < productPrince.price) return res.send({msg: "insufficient balance"})
        if(freeUser){
            let orderData = await order.create({
                userId: req.body.userId,
                productId: req.body.productId,
                amount: 0,
                isFreeAppUser: true
            })
            res.send({msg: orderData})
        }
    }
    
    module.exports.createOrder =createOrder
    module.exports.createproduct = createproduct
    module.exports.createuser = createuser