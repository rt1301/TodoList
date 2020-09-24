import React from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
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
/* Add Todo */
addTodo = (title)=>{
const newTodo = {
  id: this.state.todos.length + 1,
  title: title,
  completed: false
}
this.setState({todos: [...this.state.todos,newTodo]});
}
  render()
  {
    return (
      <div className="App" style={{height:"500px"}}>
        <div className="container">
        <Header addTodo={this.addTodo}></Header>
        <Todos todos={this.state.todos} delete={this.delete} markComplete={this.markComplete}></Todos>
        </div>
       
      </div>
    );
  }
  
}

export default App;
