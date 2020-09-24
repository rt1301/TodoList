import React from 'react';

export class AddTodo extends React.Component {
    state = {
        title: ''
    }
    input = (e)=>{
        this.setState({[e.target.name]: e.target.value});
    }
    submit = (e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }
    render() {
        return (
            <form onSubmit={this.submit} style={{display:'flex'}}>
                <input style={{flex:'10',padding:'15px'}} type="text" name="title" placeholder="Add Todo..." value={this.state.title} onChange={this.input}/>
                <input style={{flex:'1'}} type="submit" value="Submit"/>
            </form>
        )
    }
}

export default AddTodo
