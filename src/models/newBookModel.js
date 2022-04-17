const mongoose = require('mongoose');
let ObjectId=mongoose.Schema.Types.ObjectId
const newBookSchema = new mongoose.Schema( {

  
  Name : String,
   author_id:{
     type: ObjectId,
     ref:"Author"
   },
    
    
    author : String,
    Price: Number,
    publisher_Id:{
      type:ObjectId,
      ref:"Publisher"},

      isHardCover:{
          type:Boolean,
          default:false
        }



}, { timestamps: true });


module.exports = mongoose.model('NewBook', newBookSchema) //Authors
