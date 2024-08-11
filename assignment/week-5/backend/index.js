const express = require('express')
const {createTodo} = require('./types')
const {updateTodo} = require('./types')

const app = express();
app.use(express.json())

app.get('/todos',(req,res)=>{
    console.log()
})

app.post('/todo',(req,res)=>{
    const createPayload = req.body; 
    const parsedPayload = createTodo.safeParse(createPayload)
    if(!parsedPayload){
        res.status(411).json({
            msg :"Incorrect Format"
        })
        return
    } 
})

app.put('/completed',(req,res)=>{
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload);
    
    if(!parsedPayload){
        res.status(411).json({
            msg:"Incorect data"
        })
        return
    }
})