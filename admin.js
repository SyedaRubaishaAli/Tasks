// const express = require("express")
// const router = express.Router()
Or
const Router = require("express").Router

router.get("/my-users/list",(req,res) => {
    res.send("list Page")
})



router.get("/delete-user" , (req,res) =>{
    res.send("my name is bilal")
}) 



module.exports = router