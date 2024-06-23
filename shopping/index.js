const express = require('express');
const app = express();


app.get("/" , (req , res)=>{

    return res.json("This is the shopping page");
})

app.listen(8003 , ()=>{
    console.log("POrt running on the port 8003");
})