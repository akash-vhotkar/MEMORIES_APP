const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const memoriesmodel = require('./Model/postmessages');
const app = express();
const usersdb = require('./Model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(express.json());
mongoose.connect("mongodb+srv://akash:akash1234@cluster0.4ayge.mongodb.net/bookmytaxi?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("database connected successfully");
}).catch(err => {
    if (err) console.log(err);
})
const auth = async (req,res,next)=>{
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;
    
        let decodedData;
    
        if (token && isCustomAuth) {      
          decodedData = jwt.verify(token, secret);
    
          req.userId = decodedData?.id;
        } else {
          decodedData = jwt.decode(token);
    
          req.userId = decodedData?.sub;
        }    
    
        next();
      } catch (error) {
        console.log(error);
      }
}
app.post('/user/login', async (req,res)=>{
    console.log("login requst is made");
    const {email, password} = req.body;
    try{
        const olduser =  await usersdb.findOne({email: email});
        if(!olduser) return res.status(400).json({err:1, message: "user not exist please register "})
        const ispasswordcorrect =  await bcrypt.compare(password,olduser.password);
        if(!ispasswordcorrect) return res.status(400).json({err:1 ,message: "password incorrect"});
        const token = jwt.sign({ email: olduser.email, id: olduser._id }, "secret", { expiresIn: "1h" });
        res.status(200).json({err:0, message: " login successfully ", result:olduser, token})

    }catch(err){
        if(err) {
            console.log(err);
            res.status(400).json({err:1, message : " Internal server issue "})
        }
    }

})

app.post('/user/register', async  (req,res)=>{
    console.log("register requst is called ", req.body);
    const {name , email, password } = req.body;
    try{
        const olduser = await usersdb.findOne({email:email});
        if(olduser)  res.status(400).json({err:1, message: "User already exist  please login"})
        const hashpassword =  await bcrypt.hash(password, 12);

        const result = await usersdb.create({name: name, email: email, password: hashpassword});
        const token = jwt.sign({email: result.email, id: result._id}, "secret", {expiresIn:"1h"}) 
        res.status(200).json({err: 0 ,message: " Registraction successfully ",result, token})
    }catch(err){
        if(err){
            console.log(err);
            res.status(400).json({err:1, message:"Internal server error"})
        }
    }
})


app.patch('/:id', async (req,res)=>{
    try{
        console.log("patch requst is performed");
        const updatepost  = await memoriesmodel.findOneAndUpdate({_id:req.params.id},{
            creator: req.body.creator,
            title: req.body.title,
            message: req.body.message,
            tags: req.body.tags,
            selectedFile: req.body.selectedFile
        },{new: true})
        if(updatepost){
            const allposts = await memoriesmodel.find();    
            res.status(200).json(allposts);
        }
    }
    catch(err){
        console.log(err);
    }
})



app.get('/', async (req,res)=>{
    try{
    const data =   await memoriesmodel.find().sort();
    res.status(200).json(data);
    }
    catch(err){
        res.status(500).json({err: 1 ,message :"Internal server error"});
        
    }
})
app.post('/create', async (req,res)=>{
    console.log("createpost requst is fired");
    const newpost  = {
        title: req.body.title,
        message: req.body.message,
        creator: req.body.message,
        tags: req.body.tags,
        selectedFile: req.body.selectedFile
    }
    try{
        const posts  = await memoriesmodel.create(newpost);
        const allposts = await memoriesmodel.find();
        res.status(200).json(allposts)
    

    }catch(err){
        if(err) res.status(500).json({err:1, message:"Internal server error"})
    }

})

app.get('/delete/:id',async (req,res)=>{
    try{
        const post = await memoriesmodel.findOneAndDelete({_id:req.params.id});
        const allposts = await memoriesmodel.find();
        res.status(200).json(allposts);
    }
    catch(err){
        if(err) console.log(err);
    }
    
})


app.post('/like/:id', async (req,res)=>{
    try{ 
        const post = await memoriesmodel.findOne({_id: req.params.id});
        const likecount = parseInt( post.likeCount )+1;
        console.log(likecount);
        const uddatepost = await memoriesmodel.findOneAndUpdate({_id: req.params.id},{likeCount: likecount},{new:true})
        const allposts = await memoriesmodel.find();
        res.status(200).json(allposts)
    
        

    }catch(err){
        if(err) console.log(err);
    }
})


const port = process.env.PORT || 5000;

app.listen(port, (err) => {
    if (err) console.log(err)
    else {
        console.log("server is running on port 5000");
    }
})