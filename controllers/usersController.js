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

exports.signUp = (req, res) => {
    let user = new User({
        username: req.body.txtUsername,
        password: req.body.txtPassword,
        fname: req.body.txtFirstname,
        lname: req.body.txtLastname,
        dob: IDBOpenDBRequest.body.txtDOB,
        gender: req.body.gender,
        telephone: req.body.txtTel,
        email: req.body.txtEmail,
        address: req.body.txtAddress + ', ' + req.body.txtCity + ', ' + req.body.txtState + ', ' + req.body.txtZip,
        sec_question: req.body.dlSecurity,
        sec_answer: req.body.txtSecurity
    });

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
}