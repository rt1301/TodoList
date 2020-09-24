import React from 'react';
import PropTypes from 'prop-types';
export class TodoItem extends React.Component {
    getStyle = ()=>{
        return{
            textDecoration : this.props.todo.completed ? 'line-through':'none',
            backgroundColor: "#000140",
            color: "#fff",
            width: "500px",
            padding: "30px",
            margin:'auto',
            fontSize:'20px',
            borderBottom: '1px solid #ccc'
        }
    }
    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p><input type="checkbox" onChange = {this.props.markComplete.bind(this,id)}/>  {title}</p>
            </div>
        )
    }
}
/* Prop Types */
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
}
export default TodoItem;
