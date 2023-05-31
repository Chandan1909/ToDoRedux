import * as todoservices from './../services/todo-services.js';
//Funciton which will display the errors
const errResponse =(obj,res)=>{
    res.status(500);
    res.json(obj);
}
//Function which will display the success messsages
const setSuccess = (obj,res)=>{
    res.status(200);
    res.json(obj);
}
//Post request for the given request and proper response is given
export const post = async (req,res)=>{
    try {
        const payload = req.body;
        const todo = await todoservices.save(payload);
        setSuccess(todo,res);
        
    } catch (error) {
        errResponse(error,res);
        
    }
}
//based on the query the search is done
export const index =async (req,res)=>{
    try {
        const title=req.query.title;
        const description=req.query.description;
        const due_date=req.query.due_date;
        const due_time=req.query.due_time;

        const query={}
        if(title){
            query.title=title;
        }
        if(due_date){
            query.due_date=due_date;
        }

        const todolists=await todoservices.search(query);
        setSuccess(todolists,res);
        
    } catch (error) {
        errResponse(error,res);
    }
}
//get file which will retrive the where the data is present in that module or not 
export const get = async (req,res)=>{
    try {
        const id = req.params.id;
        const to=await todoservices.get(id);
        setSuccess(to,res);
        
    } catch (error) {
        errResponse(error,res);
        
    }
}
//Delete the record in the database
export const remove = async (req,res)=>{
    try {
        const id = req.params.id;
        const to=await todoservices.remove(id);
        setSuccess({message: `deleted messages ${id}`},res);
        
    } catch (error) {
        errResponse(error,res);
        
    }
}

export const update = async (req,res)=>{
    try {
        const id = req.params.id;
        const updated ={...req.body};
        updated.id=id;
        updated.status="closed";

        updated.lastmodifiedDate = Date();
        const to=await todoservices.update(updated);
        setSuccess(to,res);
        
    } catch (error) {
        errResponse(error,res);
        
    }
}