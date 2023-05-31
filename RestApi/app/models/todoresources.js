import { Timestamp } from "bson";
import mongoose from "mongoose";

//Schema for the todo resources
const schema = new mongoose.Schema({
    title:
    {
        type:String,
        required:"Title is required,plz fill the title...!!!"
    },
    description:
    {
        type:String,
        required:"Description is required,plz fill the description .....!!!"
    },
    due_date:
    {
        type:String,
        required:"Due Date is requred,plz fill the Due Date ......!!!"
    },
    due_time:
    {
        type:String,
        required:"Due Time is required,plz fill the Due Time .........!!!"
    },
    status:
    {
        type:String,
        default:"open"
    },
    modifiedDate:
    {
        type:String,
        default:Date()
    },
    lastmodifiedDate:
    {
        type:String,
        default:Date()
    }

},{versionKey:false});

const model =mongoose.model('todoresources',schema);    

export default model;