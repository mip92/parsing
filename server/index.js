const express = require("express")
const config=require('config')
const searchRouter=require("./routes/searchRouter")
const app= express()
const PORT=config.get("serverPort")
const corsMiddlware=require("./middleware/corsmiddleware")

app.use(corsMiddlware)
app.use(express.json())
app.use('/api/search',searchRouter)
const start=()=>{
    try{
        app.listen(PORT,()=>{
            console.log(`сервер запущен на ${PORT}`)
        })
    }catch (e) {
        console.log(e)
    }
}
start()