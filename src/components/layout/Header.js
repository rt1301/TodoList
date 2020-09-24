import React from 'react';
import AddTodo from '../AddTodo';
function Header(props)
{
    return(
        <header style={headerStyle}>
            <h1>TodoList</h1>
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