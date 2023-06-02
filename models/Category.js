const { default: mongoose } = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: String,
    publishDate: {
        type:Date,
        default :Date.now
    },
    year:String, 
    description: String, 
})


const Category = mongoose.model('Category', categorySchema);

module.exports = {
    Category
}