const express = require("express")
const app = express()

app.get("/", function(res,req){
    res.setEncoding("Were Live!!")
})

app.listen(process.env.PORT, 5000)