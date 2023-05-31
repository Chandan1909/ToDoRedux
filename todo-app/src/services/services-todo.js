//To make the rest call to get all the TodoList 
export const getTodoList=()=>{
    return fetch('http://localhost:8080/todo', {method:'GET'})
}

//To make the postTodo to get all the elements 
export const postTodo = async (title,description,due_date,due_time,status) =>{

    const data = fetch('http://localhost:8080/todo',
    {
        method:'POST',
        body: JSON.stringify(
            {
                "title":`${title}`,
                "description":`${description}`,
                "due_date":`${due_date}`,
                "due_time":`${due_time}`,
                "status":`open`
            }
        ),
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    return data
}

//To call the restApi to update tge value
export const updateTodo = async(id,title,description,due_date,due_time,status)=>{
    return fetch(`http://localhost:8080/todo/${id}`, 
    {
        method:'PUT',
        body: JSON.stringify(
            {
                "title":title,
                "description":description,
                "due_date":due_date,
                "due_time":due_time,
                "status":status
            }
        ),
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        }
    })
}

//To get the todo list from all the values 
export const getTodo= async (id)=>{
    return await fetch(`http://localhost:8080/todo/${id}`, {method:'GET'})
}

//To remove the value from DB
export const removeTodo=(id)=>{
    return fetch(`http://localhost:8080/todo/${id}`, {method:'DELETE'})
}