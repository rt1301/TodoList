import React from 'react'
import {Link} from 'react-router-dom';
export default function About() {
    return (
        <React.Fragment>
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link to="/" style={{color:'white',fontSize:'20px'}}>Home</Link>
        </header>
            <h1>About</h1>
            <p>About page for TodoList app</p>
        </React.Fragment>
    )
}
const headerStyle = {
    backgroundColor: '#021859',
    color: 'white',
    fontSize: '40px',
    marginBottom: '40px'
}