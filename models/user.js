/*
	Hunter Culler and Ian Anderson
	University of Colorado Denver CSCI 4800 E01
	Web Application Developement
	Group Assignment 3

	March 31st, 2021

	Status = Functional

*/

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