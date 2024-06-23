const express = require('express');
const app = express();


app.get("/" , (req , res)=>{

    return res.json("This is the product page");
})

app.listen(8002 , ()=>{
    console.log("POrt running on the port 8002");
})