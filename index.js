const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const TestModel = require('./models/test')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/test");

app.post('/login', (req,res) => {
    const {email , password} = req.body;
    TestModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("success")
            } else {
                res.json("the password is incorrect")
            }

        } else {
            res.json("No record existed")
        }
    })

})

app.post('/register', (req, res) => {
    TestModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))

})

app.listen(3000, () => {
    console.log("server is running")
})

