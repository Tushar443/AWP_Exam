const db=require('./db_connect');
const express =require('express');
const bluebird= require('bluebird');
const core =require('cors');
const session = require('express-session');
var cookieParser = require("cookie-parser");
const body =require('body-parser');
const bcrypt =require('bcrypt');
const { response } = require('express');
const { readData } = require('./db_connect');
const { password } = require('./db_config');
const app =express();

/**
 * Middle Wares
 */
app.use(cookieParser());
app.use(core());
app.use(express.json());
app.use(body.urlencoded({extended:true}))
let redirectLogin = (req,res,next)=>{
    if(!req.session.userId){
        res.redirect('/login');
    }
    else{
        next();}
};

let redirectHome = (req,res,next)=>{
    if(req.session.userId){
        res.redirect('/home');
    }
    else{
        next();}
};



/** SESSION */
app.use(session({
    name: 'sid',
    saveUninitialized: false,
    resave: false,
    secret: `quiet, pal! it's a secret!`,

    cookie: {
      maxAge: 1000 * 60 * 60 * 2,
      sameSite: true,
      secure: process.env.NODE_ENV === 'production'
    }
  })
)

/** GET Requests*/
app.get('/',redirectHome,(req,res)=>{
    const {userId} = req.session;
    res.send(`
    
    ${userId ? `
    <h1>Welcoe to Home PAge</h1><br/><a href='/home'>Home</a>
    <form method='post' action ='/logout'>
        <button>Logout</button>
    </form>` :
    `<a href='/login'>Login</a><br/>
    <a href='/signup'>Register</a><br/>`}    
    `);
});

app.get('/home',redirectLogin,(req,res)=>{
  let findData= req.session.userId;
  var res_username;
  var res_email;
  db.findData(findData).then(result=>{
    res_username= result[0].Username;
    res_email =result[0].emailID;
    res.send(`
    <h1>HOME PAGE</h1>
    <a href='/'>main</a>
    <ul>
        <li>Username :${res_username} </li>
        <li>Email-ID :${res_email} </li>
    </ul>
    <form method='post' action ='/logout'>
        <button>Logout</button>
    </form>
    `)
  }).catch(err=>console.log(err));
});

app.get('/login',redirectHome,(req,res)=>{
   
    res.send(`<h1>Login</h1>

    <form method="POST" action="/login">
        <input type="text" name="username" placeholder="username" required>
        <input type="password" name="password" placeholder="password" required>
        <input type="submit">
    </form>
    <a href="/signup">Register Here</a>
    `)
})

app.get('/signup',redirectHome,async (req,res)=>{
    res.send(`<h1>Register Here</h1>

    <form method="post" action="/signup">

        <input type="text" name="Username" placeholder="name" required>
        <input type="text" name="emailID" placeholder="Email" required>
        <input type="password" name="User_Pass" placeholder="password" required>
        <input type="submit">
    </form>
    <a href="/login">Already Sign in</a>
    `)
})

/**  POST Request
 
 */

app.post('/login',redirectHome,async(req,res)=>{
    let user =req.body;


db.readData(user).then(response=>{
         let user_username=  response[0].Username;
     let user_User_Pass = response[0].User_Pass;
     let user_session_ID = response[0].id;
     
     if(user.username===user_username && user.password===user_User_Pass){
        req.session.userId=user_session_ID;
         res.redirect('/home');
    }else{
        res.redirect('/signup')
    }
}).catch(err=>{
    console.log(err);
});
})

app.post('/signup',redirectHome,async(req,res)=>{
    let user =req.body;
    console.log(user);

  let result=await db.countData().then(async result1=>{result1= result1[0].total
       let new_data= await db.insertData(user);
    req.session.userId=result1+1;
     res.redirect('/home');
}).catch(err=>console.log(err));

}); 


app.post('/forgot',async(req,res)=>{
    let emailID =req.body.emailID;
    let password =req.body.password;
    let user ={
        emailID,
        password,
    }
    console.log(user);
let result =await db.updateData(user);
        
        res.redirect('/login');
        console.log('Update Succesfully');
});

app.post('/logout',redirectLogin,(req,res)=>{
   req.session.destroy((err)=>{
       if(err){
           return res.redirect('/home');
       }
       res.clearCookie('sid');
       res.redirect('/login');
   })
})

app.listen(5600,(err)=>{
    if(err) throw err;
    console.log("Port is listening on port 5600");
});
