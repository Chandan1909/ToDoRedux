import React from "react";
import {connect} from 'react-redux';
import {updateTodoAction, deleteTodoAction} from '../Store/Actions/Todo';
import {updateTodo} from './../services/services-todo';

//Dispatch fucntion 
const mapings = (dispatch)=>{
    return {
        update: todo=>dispatch(updateTodoAction(todo)),
        delete: todo=>dispatch(deleteTodoAction(todo))
    };
}
//Item component class
class Items_Comp extends React.Component
{
    //State fucntion
    constructor(){
        super();
        this.state={
            showMe:false
        }
    }
    //State checking the values 
    operations()
    {
        this.setState({
            showMe:!this.state.showMe
        })
        
    }
    // Chnaging the status of the completed once they hit enter 
    changeStatus(e)
    {
        const todoitems=this.props.ite;
        // const sec=document.getElementsByClassName("task");
        // sec.style.backgroundColor="rgb(1, 79, 1)";
        // document.sec.style.backgroundColor = 'green';
        
        updateTodo(todoitems._id,todoitems.title,todoitems.description,todoitems.due_date,todoitems.due_time,"Closed").then((response) => {
            return response.json()
         }).then((data) => {
            this.props.update(data);
         });
    }
    //Deletion of the node
    deletion(e)
    {
        const tododel=this.props.ite;
        this.props.delete(tododel);
    }

    render(){

        const todoitems=this.props.ite;
        //Rendering the values 
        return (
            <div className={todoitems.status == 'open'? 'task': 'task green'}> 
                    <div className="content">
                        <span className="text" readOnly>{todoitems.title}</span>
                        {
                            this.state.showMe?
                            <div>
                                <p className="dynamic_content">Description : <span className="dynamic_description">{todoitems.description}</span></p>
                                <p className="dynamic_content" >Created Date : <span className="dynamic_due_date">{new Date(todoitems.modifiedDate).toLocaleString('en-US')}</span></p>
                                <p className="dynamic_content" >Modified Date : <span className="dynamic_due_time">{new Date(todoitems.lastmodifiedDate).toLocaleString('en-US')}</span></p>
                                <p className="dynamic_content" >Due Date : <span className="dynamic_due_date">{todoitems.due_date}</span></p>
                                <p className="dynamic_content" >Due Time : <span className="dynamic_due_time">{todoitems.due_time}</span></p>
                                <p className="dynamic_content" >Status : <span className="dynamic_due_time">{todoitems.status}</span></p>

                            </div>
                            :null
                        }
                                         
                    </div>
                <div className="actions">
                    <button className="Done_button" onClick={()=>this.changeStatus()}>Completed</button>  
                    <button className="View" onClick={()=>this.operations()}>View</button>
                    <button className="Mark_as_completed" onClick={()=>this.deletion()}>Delete</button>
                </div>
            </div>
        );

    }

}
//connecting the values 
const Items =connect(null,mapings)(Items_Comp);

export default Items;