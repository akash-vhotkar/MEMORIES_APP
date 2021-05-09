const mongoose = require('mongoose');
const postschema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: String,
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0

    },
    createdAt: {
        type: Date,
        default: new Date()
    }

})
const postmodel = mongoose.model("postmessages3", postschema);
module.exports = postmodel;