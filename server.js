const express=require('express');
const jwt=require('jsonwebtoken');
const app=express();
app.use(express.json());
require('dotenv').config();

const posts=[
  {
    username:'Ankit',
    title:'post 1'
  },
  {username:'Aman',
    title:'post 2'
  }
];

app.get('/posts',authenticateToken,(req,res)=>{
  res.json(posts.filter(post=>post.username===req.user.name));
});


app.post('/login',(req,res)=>{
  //authenticate user
  const username=req.body.username;
  const user={name:username};
  const accessToken=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{ expiresIn: '15m' });
  res.json({accessToken:accessToken});
  
});


function authenticateToken(req,res,next){
  const authHeader=req.headers['authorization'];
  const token=authHeader && authHeader.split(' ')[1];
  if(token==null){
    return res.status(401).json({message:'Token not found'});
  }

  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
    if(err) return res.status(403).json({message:'Invalid Token'});
    req.user=user;
    next();
  })

}

app.listen(3000);