const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const userdata = require("./utility/userdata.json");
const path = require("path");
// const fileURLtopath=require("url")
const app = express();
const PORT = 7000;

app.use(express.json());

// static files wala middlewares

app.use(express.static(path.resolve(__dirname, "./public")));

app.get("/userdata", (req, res) => {
    res.send(userdata)
});
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./public","index.html" ));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./public","contact.html" ));
});
app.get("/digital-clock", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./public","digital-clock.html" ));
});

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`.yellow);
});