const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    name:String,
    location:String,
    likes:Number, 
    description:String,
    PostImage:{
        data: Buffer,
        contentType: String,
    },
    date:Date

});

const postModal = mongoose.model("post", postSchema);

module.exports = postModal;