//Importing the required files
import './header_section.scss';
import React from 'react';
import {connect} from 'react-redux';
import {addTodoAction} from '../Store/Actions/Todo';
import {postTodo} from '../services/services-todo'
//Dispatching the function
const maping = (dispatch)=>{
    return {
        add: todo=>dispatch(addTodoAction(todo))
    };
}

//Building the header section
class Header_sectionComp extends React.Component{
    
    constructor()
    {
        super();
        this.state={
            title:'',
            description:'',
            due_date:'',
            due_time:'',
            status:''
        }
        //Creating the state value so to capture the values
        this.state={
            showMe:false
        }
    }

    //Modififying the state value
    operations()
    {
        this.setState({
            showMe:!this.state.showMe
        })
        
    }

    //The functio to create a new Post request and chnage the state
    handleSubmit = (e)=>{
        this.operations();
        const newtodo=this.state;
        postTodo(newtodo.title,newtodo.description,newtodo.due_date,newtodo.due_time,newtodo.status).then((response) => {
            return response.json()
         }).then((data) => {
            this.props.add(data);
         });
        e.preventDefault(); 
    }

    textChange =(title,e)=>{
        this.setState({
            [title]:e.target.value,
        })
    }
    
    //Rendering the form elements 
    render(){

        return(
            <header>
                <h1>To Do Lists</h1>
                <button id="add_new_task_button" onClick={()=>this.operations()}>Add New Task</button>
                {
                    this.state.showMe?
                    <div id="form_container_div">
                        <form id="new-task-form" onSubmit={this.handleSubmit}>
                            <span id="name_title">Title</span>
                            <input type="text" id="new-task-input" placeholder="Title" pattern="[A-Za-z0-9 ]*" required value={this.state.title} onChange={this.textChange.bind(this,'title')}/>
                            <span id="name_title">Description</span>
                            <textarea id="new-task-description" cols="30" rows="10" placeholder="Description" required value={this.state.description} onChange={this.textChange.bind(this,'description')}></textarea>
                            <span id="name_title">Due Date</span>
                            <input type="date" id="new-task-date" placeholder="Due Date" required value={this.state.due_date} onChange={this.textChange.bind(this,'due_date')}/>
                            <span id="name_title">Due Time</span>
                            <input type="time" id="new-task-time" placeholder="Due Time" required value={this.state.due_time} onChange={this.textChange.bind(this,'due_time')}/>
                            <span id="name_title"></span>
                            <input type="submit" id="add-new-task" value="Submit" required/>    
                        </form>
                    </div>
                    :null
                }
                
            </header>
        );
    }
}
//Connect method to connect 
const Header_section =connect(null,maping)(Header_sectionComp);
//Export the default value
export default Header_section;