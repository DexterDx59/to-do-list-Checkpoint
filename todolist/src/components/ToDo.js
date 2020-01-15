import React, {Component} from 'react';
class ToDo extends Component {

    state = {
        done: false
    }
    
    render() {

        let textDecorationStyle;
        if (this.state.done === true) {
            textDecorationStyle = 'line-through'
        } else {
            textDecorationStyle = 'none'
        }

        return (
            <div style={{border: 'black solid 5px', marginTop: 20, padding: 5, width: '90%'}}>
                <p style={{textDecoration: textDecorationStyle, cursor: 'pointer'}}
                 onClick={() => this.setState({done: !this.state.done})}>{this.props.task}</p>
            </div>
        )

    }
}

export default ToDo;