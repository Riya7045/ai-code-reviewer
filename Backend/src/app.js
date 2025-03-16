const express = require('express');
const airoutes=require('./routes/ai.routes');
const cors = require('cors')
const app = express();//when we call express a server is created but not started

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello World')
})//to check ki hmara serve chal rha hai ki nhi ya kisi error ke karan bnd toh nhi ho gya

app.use('/ai',airoutes);
module.exports = app