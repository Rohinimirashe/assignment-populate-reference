const mongoose = require('mongoose');

const newAuthorSchema = new mongoose.Schema( {

    
    author_name: String,
    age: Number,
    address: String,
    rating : Number,


}, { timestamps: true });


module.exports = mongoose.model('NewAuthors', newAuthorSchema) //Authors
