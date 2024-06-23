const express = require('express');
const proxy  = require('express-http-proxy');
const cors = require('cors');
const app = express();






app.use(cors());
app.use(express.json());

app.use('/customer', proxy('http://localhost:8001'));
app.use('/products', proxy('http://localhost:8002'));
app.use('/', proxy('http://localhost:8003'));


app.listen(8000 , ()=>{
    console.log("POrt running on the port 8000");
})