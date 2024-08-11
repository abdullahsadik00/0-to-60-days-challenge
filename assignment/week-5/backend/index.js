const express = require('express')

const app = express();
app.use(express.json())

app.get('/todos',(req,res)=>{
    console.log()
})

app.post('/todo',(req,res)=>{
    console.log()
})

app.put('/completed',(req,res)=>{
    console.log()
})