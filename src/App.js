import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import About from './components/pages/About';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
      ]
    }
    
  }
  /* Fetching data */
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then(res=>this.setState({todos: res.data}));
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
   axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
     res=>{
      this.setState({todos: [...this.state.todos.filter((todo)=>
        {return todo.id !== id}
        )
      ]
     }
   )
})
 }
/* Add Todo */
addTodo = (title)=>{
axios.post("https://jsonplaceholder.typicode.com/todos",{
  title:title,
  completed: false
}).then(res=>{
  this.setState({todos: [...this.state.todos,res.data]});
})

}
  render()
  {
    return (
      <Router>
      <div className="App" style={{height:"500px"}}>
        <div className="container">
          <Route exact path="/" render={props=>(
            <React.Fragment>
              <Header addTodo={this.addTodo}></Header>
              <Todos todos={this.state.todos} delete={this.delete} markComplete={this.markComplete}></Todos>
            </React.Fragment>
          )}></Route>
          <Route path="/about" component={About}></Route>
        </div>
      </div>
      </Router>
    );
  }
  
}

export default App;
