import AppState from './../State';
import { TodoActionTypes } from '../Actions/Todo';
import {postTodo, updateTodo, getTodo,removeTodo} from '../../services/services-todo'

//Reducer to perform the values as expected 
const reducer = (state=AppState,action)=>{

    var newTodo;
    
    const type=action.type;
    const payload=action.payload;

    //to identify the type of script
    switch(type)
    {
        case TodoActionTypes.ADD_TODO : 
            newTodo=[...state.todo];
            newTodo.push(payload);
            break;

        case TodoActionTypes.DELETE_TODO :
            const filtered=state.todo.filter(c=>c !== payload);
            removeTodo(payload._id);
            newTodo=[...filtered];
            break;

        case TodoActionTypes.ADD_MANY_TODO :
            newTodo = [...state.todo,...payload];
            break;
         
        
        case TodoActionTypes.UPDATE_TODO : 
            newTodo=[...state.todo];
            newTodo = newTodo.filter(c=>c._id !== payload._id);
            newTodo.push(payload);
            break;

        default : 
            newTodo=[...state.todo];
            break;
    }
    return Object.assign({},state,{todo : newTodo});
}

export default reducer; 