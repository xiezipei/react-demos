import React, { Component } from 'react';   // imrc

class XiaojiejieItem extends Component {    // cc
    state = {  }
    render() { 
        return (
            <div>
                { this.props.content }
                <button onClick={ this.handleClick.bind(this) }>X</button>
            </div>);
    }
    handleClick() {
        console.log(this.props)
    }
}
 
export default XiaojiejieItem;