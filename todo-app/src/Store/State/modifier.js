import todo from './Todo';
//Modifier method to check for existence
function add(note) {
    console.log('inside add!');
    let todoList = [...todo]
    todoList.push(note);
    console.log('todo list:');
    console.log(todoList);
}

export default add;