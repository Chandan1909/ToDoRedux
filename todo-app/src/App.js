import './App.scss';
import React from 'react';
import Header_section from './Header_section/Header_section';
import Task_section from './Task_section/Task_section';


//The application 
class App extends React.Component {
  render()
  {
    //header section and task asection to section 
    return (
      <div>
        <Header_section></Header_section>
        <Task_section></Task_section>
      </div>  
    );
  }
  
}

export default App;
