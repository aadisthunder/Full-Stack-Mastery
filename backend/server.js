const express = require("express")
const app = express()

const env = require("dotenv")
env.config({ path: './.env' })
const PORT = process.env.PORT || 3000

app.get("/", (req, res)=>{
    res.send("Hello World from the backend!")
})

app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`)
})
