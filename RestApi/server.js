import app from './app/app.js';
//setting the port value and the server value 
const port =8080;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});