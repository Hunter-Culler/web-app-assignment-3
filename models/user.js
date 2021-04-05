const mongoose = require("mongoose"),
    userSchema = mongoose.Schema({
        username: String,
        password: String,
        fname: String,
        lname: String,
        dob: Date,
        gender: String,
        telephone: String,
        email: String,
        address: String,
        sec_question: String,
        sec_answer: String
    });

module.exports = mongoose.model("User", userSchema);