//Todo Action Types
export const TodoActionTypes={

    ADD_TODO : '[Todo] Add Todo',
    ADD_MANY_TODO : '[Todo] AddMany Todo',
    UPDATE_TODO : '[Todo] Update Todo',
    DELETE_TODO : '[Todo] Delete Todo'
}
//Add Action Type
export const addTodoAction =(payload)=>({
    type:TodoActionTypes.ADD_TODO, payload
})
//Add Many Contents to the action type
export const addManyTodoAction =(payload)=>({
    type:TodoActionTypes.ADD_MANY_TODO, payload
})
//Delete the Action types
export const deleteTodoAction =(payload)=>({
    type:TodoActionTypes.DELETE_TODO,payload
})
//Upadte the action type
export const updateTodoAction=(payload)=>({
    type:TodoActionTypes.UPDATE_TODO,payload
})