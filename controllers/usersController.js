const User = require("../models/user");

exports.getLogInPage = (req, res) => {
    res.render("login");
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
        res.render("login")
    }

}