const newBookModel = require("../models/newBookModel")

// const createNewBook= async function (req, res) {
//     let data= req.body
//     let savedData= await newBookModel.create(data)
//     res.send({msg: savedData})
//}

const getnewBookData= async function (req, res) {
    let newBook= await newBookModel.find()
    res.send({msg: newBook})
    
}
const getBookWithAuthorDetail= async function (req, res) {
    let newBook1= await newBookModel.find().populate('author_id')
    res.send({msg: newBook1})
}
const createNewBook = async function (req, res) {
    let book = req.body
    let check = await AuthorModel.findOne({ _id: book.author_id })
    let check1 = await publisherModel.findOne({ _id: book.publisher_Id })
    if (book.author_id && book.publisher_Id) {
        if (check === null) {
            res.send("author is not persent")
        }
        else if (check1 === null) {
            res.send("publisher is not persent")
        }
        else {
            let bookCreated = await bookModel.create(book)
            res.send({ data: bookCreated })
        }
    }
    else { res.send("detail is required") }
    // res.send({msg:check})
}
const updateBookData = async function (req, res) {  
    //let kd = publisher_id.name
    let check1 = await newPublisherModel.findOne({name: "Penguin"}).select('_id')
    let specificBook = await bookModel.updateMany({publisher_id : check1},{$set:{isHardCover:true }})
    res.send({ data: specificBook })

}

const updateBookPrice= async function(req,res){
    let check = await newAuthorModel.find({rating:{$gt:3.5}}).select('_id')
    let bookdata=await bookModel.updateMany({author_id:check},{$inc:{price:8}})
    res.send({data:bookdata})
}




module.exports. createNewBook= createNewBook
module.exports. getnewBookData= getnewBookData
module.exports.getBookWithAuthorDetail=getBookWithAuthorDetail
module.exports.updateBookData = updateBookData
module.exports.updateBookPrice = updateBookPrice
