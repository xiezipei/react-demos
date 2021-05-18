import React, { Component } from 'react';   // imrc

class XiaojiejieItem extends Component {    // cc
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render() { 
        return (
            <div>
                { this.props.content }
                <button onClick={ this.handleClick }>X</button>
            </div>);
    }
    handleClick() {
        console.log(this.props)
        this.props.deleteItem(this.props.index)
    }
}
 
export default XiaojiejieItem;