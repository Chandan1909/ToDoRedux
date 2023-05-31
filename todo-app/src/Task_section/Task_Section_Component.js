import { connect } from "react-redux";
import React from "react";

import './task_section.scss'
import Items from "./Items";

//Function to get the states 
const mapStatetoProps = (state)=>({todos : state.todo.todo});

//The task Section each components 
class Task_Section_Compont extends React.Component{

    constructor(){
        super();
        this.state={
            showMe:false
        }
    }

    //Setting the state
    operations()
    {
        this.setState({
            showMe:!this.state.showMe
        })
        
    }


    render(){
        //Getting the props from the connect function
        const items=this.props.todos;
        
        const renderListing=items.map((todoitems,i)=>{

            return (
                <Items ite={todoitems} key={i}></Items>
        );

        })
        //rendering the values 
        return <div>{renderListing}</div>;
    }
}

const Task_Section_Component=connect(mapStatetoProps,null)(Task_Section_Compont);
//Exporting the vlaues tp the TAsk Section
export default Task_Section_Component;

