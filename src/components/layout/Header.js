import React from 'react';

function Header()
{
    return(
        <header style={headerStyle}>
            <h1>TodoList</h1>
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