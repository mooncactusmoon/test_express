const express = require('express');
const db=require('./config/db');
const app = express();
const port=3000;

app.use(express.json());

require("./app/routes/users.js")(app);

app.get('/',(req,res)=> res.send('hello'))


app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port} `);
})