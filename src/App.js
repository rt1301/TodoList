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
  /* Toggle Complete */
 markComplete = (id)=>{
   this.setState({todos: this.state.todos.map(todo=>{
     if(todo.id === id)
     {
       todo.completed = !todo.completed;
     }
     return todo;
   })})
 }
 /* Delete todo */
 delete = (id)=>{
   this.setState({todos: [...this.state.todos.filter((todo)=>
    {return todo.id !== id}
    )
  ]
})
 }
  render()
  {
    return (
      <div className="App" style={{height:"500px"}}>
        <h1>App</h1>
        <Todos todos={this.state.todos} delete={this.delete} markComplete={this.markComplete}></Todos>
      </div>
    );
  }
  
}

export default App;
