const express = require('express');
const router = express.Router();

const newBookcontroller= require("../controllers/newBookcontroller")
 const newPublishercontroller= require("../controllers/newPublisherconroller")
const newAuthorcontroller= require("../controllers/newAuthorcontroller")
const { response } = require("express")
const { findOne } = require("../models/newAuthorModel")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

 router.post("/createBook", newBookcontroller.createNewBook)

router.get("/getBooksData",newBookcontroller.getnewBookData)
 router.post("/createAuthor", newAuthorcontroller.createnewAuthor) 
  router.get("/getAuthorsData", newAuthorcontroller.getnewAuthorData)

 router.post("/createPublisher", newPublishercontroller.createPublisher)
  router.get("/getPublishersData",newPublishercontroller.getPublishersData)

 router.get("/getBookWithAuthorDetail", newBookcontroller.getBookWithAuthorDetail)
 //router.post("/createpublisher", bookController.createpublisher)
router.put("/updateBookprice",newBookcontroller.updateBookPrice)
router.put("/updateBookdata",newBookcontroller.updateBookData)



module.exports = router;