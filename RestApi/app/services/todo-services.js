import todo from './../models/todoresources.js'
//This will Save the data to the respective database
export const save =(newtodo)=>{
    const todolist=new todo(newtodo);
    return todolist.save();
};

//This function will query a string and pass the data
export const search =(query)=>{
    const params={...query};
    return todo.find(params).exec();
}
//This will accept an argument as id and retrive all the data's
export const get=(id)=>{
    const todos = todo.findById(id).exec();
    return todos;   
}
//update the values using the id  value
export const update=(updated) =>{
    const updatess = todo.findByIdAndUpdate(updated.id,updated,{new:true}).exec();
    return updatess;
}
//Delete the id sent
export const remove =(id)=>{
    const removed =todo.findByIdAndDelete(id).exec();
    return removed;
}