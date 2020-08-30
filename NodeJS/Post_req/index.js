const db = require('./db_connect');
const express=require('express');
const app =express();

const cors = require('cors');

app.use(cors());
app.use(express.json);

app.get('/', (req, res) => {
    res.json({
        res: 200,
        read: 'Successfully',
    })
});


app.get('/about', (req, res) => {
    let city = req.query.city;
    let username = req.query.username;
    let user = {
        city,
        username,
    }
    db.insertData(user);

    res.json({
        res: 200,
        read: 'About'
    })
});

app.post('/about',async (req, res) => {
    const input =req.body;
   await db.insertData(input);
    res.json({
        res: 200,
        read: 'About POST',
        myData : JSON.stringify(req.body),
    })
});

app.listen(5600, (err) => {
    if(err) throw err;
    console.log("Port is listening on port 5600");
});