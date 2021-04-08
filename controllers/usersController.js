/*
	Hunter Culler and Ian Anderson
	University of Colorado Denver CSCI 4800 E01
	Web Application Developement
	Group Assignment 3

	March 31st, 2021

	Status = functional

*/

const User = require("../models/user");

exports.getLogInPage = (req, res) => {
    res.render("login");
}

exports.getSignUpPage = (req, res) => {
    res.render("signup");
}

exports.signIn = (req, res) => {
    
    let user = new User({
        username: req.body.username,
        password: req.body.password
    });

    var myQuery = User.findOne({
        username: user.username
    })
    .where("password", user.password);

    if(data) {
        console.log("Successfully signed in!");
    }
    else {
        res.render("login");
    }

}

exports.getAllUsers = (req,res) => {
    user.find([])
    .exec()
    .then(users => {
        res.render("users", {users: users})
    })
    .catch((error) => {
        console.log(error);
        return [];
    })
    .then(() => {
        console.log("promise complete");
    })
}

exports.signUp = (req, res) => {
    let user = new User({
        username: req.body.txtUsername,
        password: req.body.txtPassword,
        fname: req.body.txtFirstname,
        lname: req.body.txtLastname,
        //dob: IDBOpenDBRequest.body.txtDOB,
        dob: req.body.txtDOB,
        gender: req.body.gender,
        telephone: req.body.txtTel,
        email: req.body.txtEmail,
        address: req.body.txtAddress + ', ' + req.body.txtCity + ', ' + req.body.txtState + ', ' + req.body.txtZip,
        sec_question: req.body.dlSecurity,
        sec_answer: req.body.txtSecurity
    });
    user.save()
    .then(() => {
        res.render("thanks")
    })
    .catch(error => { res.send(error)});

    /*
    var myQuery = User.findOne({
        email: user.email
    })
    .where("email", user.email);

    if(data) {
        var email = document.getElementById("txtEmail");
        email.classList.add("exists");
        res.render("signup");
    }
    else {
        var email = document.getElementById("txtEmail");
        email.classList.remove("exists");
        console.log("Successfully created account");
    }
    */
}