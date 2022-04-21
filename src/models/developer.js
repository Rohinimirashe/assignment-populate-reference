const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const developerSchema = new mongoose.Schema({
    name: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    percentage: Number,
    batch: {
        type: ObjectId,
        ref: "batches"
    }

}, { timestamps: true });


module.exports = mongoose.model('developer', developerSchema)


// 2. Write an api POST /developers that creates a developer from the details in the request body.
// Please note that the gender should be an enum with the following allowed values - male , female
// and other . Also, batch attribute is a reference to the batches collection.