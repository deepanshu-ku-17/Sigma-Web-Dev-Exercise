import mongoose from "mongoose";
import express from "express";
import { data } from "./models/maindata.js";

let con = await mongoose.connect("mongodb://localhost:27017/exersice_16")
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', async (req, res) => {
    res.sendFile("index.html", { root: "./public" });
});

app.get('/toggle', async (req, res) => {

    let nameArr = ["deepanshu", "rahul", "nanu"]
    let salaryArr = [23000, 45000, 53000]
    let languageArr = ["python", "mern", "java"]
    let cityArr = ["GZB", "Delhi", "Noida"]
    let isManager = false

    let nameRand = Math.floor(Math.random() * 3)
    let salaryRand = Math.floor(Math.random() * 3)
    let languageRand = Math.floor(Math.random() * 3)
    let cityRand = Math.floor(Math.random() * 3)
    let isRand = Math.floor(Math.random() * 2)

    let name = nameArr[nameRand]
    let salary = salaryArr[salaryRand]
    let language = languageArr[languageRand]
    let city = cityArr[cityRand]

    if (isRand == 1) {
        isManager = true
    }


    const emp = new data({
        name: name,
        salary: salary,
        language: language,
        city: city,
        isManager: isManager
    });


    if (! await data.findOne({})) {
        await emp.save();
        res.send("data saved")

    }
    else {
        await data.deleteMany({});
        res.send("data delete")
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
