//Importing all the modules
import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import routes from './routes/index.js';
import models from './models/index.js';

const app=express();
//Connecting to the mongo DB
mongoose.connect('mongodb://localhost:27017/ToDoResources');

app.use(express.json());
//Using Express Js URL Encoding 
app.use(express.urlencoded());
app.use(cors());

//Routing the address properly
routes(app);

export default app;

