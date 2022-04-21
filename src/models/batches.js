const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema( {
        name: String,
        size: Number,
        program: {
            type: String,
            enum: ["backend", "frontend"]
        }
        
}, { timestamps: true });

module.exports = mongoose.model('batches', batchSchema)

// 1. Write an api POST /batches that creates a batch from the details in the request body. Please note
// that the program should be an enum with the following allowed values only - backend and frontend