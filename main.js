const express = require("express"), app = express(),
usersController = require("./controllers/usersController"),
layouts = require("express-ejs-layouts"),
mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/social_media_website", 
    {useNewUrlParser: true});

app.set("port", process.env.PORT || 3000);

app.set("view engine", "ejs");
app.use(layouts);

app.get("/", usersController.getLogInPage);

app.use(express.static("public"));

app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(express.json());


app.post("/sign_in", usersController.signIn);

app.listen(app.get("port"), () => {
    console.log(`Server is running on port: ${app.get("port")}`)
});