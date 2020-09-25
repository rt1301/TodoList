import React from 'react';
import PropTypes from 'prop-types';
export class TodoItem extends React.Component {
    getStyle = ()=>{
        return{
            textDecoration : this.props.todo.completed ? 'line-through':'none',
        }
    }
    render() {
        const {id, title} = this.props.todo;
        return (
            <div className="todoItem" style={this.getStyle()}>
                <p style={{display:'inline'}}><input type="checkbox" onChange = {this.props.markComplete.bind(this,id)}/>  {title} </p>
                <button onClick={this.props.delete.bind(this,id)} className="delete">&#x2715;</button>
            </div>
        )
    }
}
/* Prop Types */
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired
}
export default TodoItem;
