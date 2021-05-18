const express = require("express")
const app = express()
const router = require("./router")
const PORT = 5000||process.env.PORT




//middleware
app.use(express.json())
app.use(router)


app.listen( PORT, ()=>{
    console.log(`server is up and running on port ${PORT}`);
})