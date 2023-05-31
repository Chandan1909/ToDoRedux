import React from 'react';
import './task_section.scss';

import Task_Section_Component from '../Task_section/Task_Section_Component'
import { connect } from 'react-redux';

import {addManyTodoAction} from '../Store/Actions/Todo';
import {getTodoList} from '../services/services-todo';

//Dispatching method 
const mapDispatchToProps = (dispatch)=>{
    return {
        addMany : todos =>dispatch(addManyTodoAction(todos))
    };
}
//Task Section main component
class Task_section_Comp extends React.Component{
    //Fetching all the data from the DB and displaying those values 
    compoundMount(){
        getTodoList().then((response) => {
            return response.json()
         }).then((data) => {
            this.props.addMany(data);
         })
        //getTodoList().then(todos=>this.props.addMany(todos));
    }
    constructor()
    {
        super();
        this.compoundMount();
    }
    
    // Rendering fucntion just to render the values 
    render(){
        return (
            <main>
                <section className='task-list'>
                    <h2>Tasks</h2>
                    <div id="tasks">
                        <Task_Section_Component/>
                    </div>
                </section>
            </main>
        );
    }
}
//Connect funcition for the dispathcig values to Props
const Task_section=connect(null,mapDispatchToProps)(Task_section_Comp);

export default Task_section;