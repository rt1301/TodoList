import React from 'react';
import Todos from './components/Todos';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title:'Complete Signals & Systems Assignment',
          completed: false
        },
        {
          id: 2,
          title:'Learn SQL',
          completed: false
        },
        {
          id: 3,
          title:'Learn React',
          completed: false
        },
        {
          id: 4,
          title:'Watch Cricket',
          completed: false
        }
      ]
    }
    
  }
 
  render()
  {
    return (
      <div className="App">
        <h1>App</h1>
        <Todos todos={this.state.todos}></Todos>
      </div>
    );
  }
  
}

export default App;
