import React from 'react';
import AddTodo from '../AddTodo';
import {Link} from 'react-router-dom';
function Header(props)
{
    return(
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link to="/about" style={{color:'white',fontSize:'20px'}}>About Page</Link>
            <AddTodo addTodo={props.addTodo} />
        </header>
    )
}
const headerStyle = {
    backgroundColor: '#021859',
    color: 'white',
    fontSize: '40px',
    marginBottom: '40px'
}
export default Header;