import mongoose from "mongoose";

const exSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    language:String,
    city: String,
    isManager:Boolean
});

export const data = mongoose.model('maindata',exSchema)