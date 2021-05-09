const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const memoriesmodel = require('./Model/postmessages');
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb+srv://akash:akash1234@cluster0.4ayge.mongodb.net/bookmytaxi?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("database connected successfully");
}).catch(err => {
    if (err) console.log(err);
})
app.patch('/:id', async (req,res)=>{
    try{
        
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
app.post('/', async (req,res)=>{
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