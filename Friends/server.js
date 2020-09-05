const express = require("express");
const cors = require("cors");
const addUser = require("./insert.db");
const updateUser=require("./update.db");

const app = express();
app.use(express.json());
app.use(cors());

//Insert
app.post("/register", (req, res) => {

    try {
        const input = req.body;
        addUser.insertData(input);
        res.json({ Message: "Successfully Executed :) " });
    }
    catch (err) {
        res.sendStatus(500);
    }
});

//Update
app.post("/forgotpassword", (req, res) => {

    try {
        const input = req.body;
        updateUser.updateData(input);
        res.json({ Message: "Successfully Executed :) " });
    }
    catch (err) {
        res.sendStatus(500);
    }
});


const PORT = process.env.PORT || 3000
app.listen(PORT);
console.log(`Server is running on Port: ${PORT}.`);

