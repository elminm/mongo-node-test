const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email:String, 
    password: String, 
    addDate: { type: Date, default: Date.now }
})


const User = mongoose.model('User', userSchema);

module.exports = {
    User
}