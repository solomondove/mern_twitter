const mongoose = require('mongoose'); 
const express = require("express"); 
const bodyParser = require('body-parser'); 
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets"); 

const app = express(); 
const db = require('./config/keys').mongoURI; 

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Too early for work")); 
app.use("/api/users", users); 
app.use("/api/tweets", tweets); 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 

const port = process.env.PORT || 5000;

app.listen(port , () => console.log(`server is running on port ${port}`));