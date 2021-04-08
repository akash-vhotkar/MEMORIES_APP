const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb+srv://akash:akash1234@cluster0.4ayge.mongodb.net/bookmytaxi?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("database connected successfully");
}).catch(err => {
    if (err) console.log(err);
})

app.use('/post', require('./Routes/posts'))






const port = process.env.PORT || 5000;

app.listen(port, (err) => {
    if (err) console.log(err)
    else {
        console.log("server is running on port 5000");
    }
})