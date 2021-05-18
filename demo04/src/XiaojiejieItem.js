import React, { Component } from 'react';   // imrc
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {    // cc
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    componentWillReceiveProps(){
        console.log('child - componentWillReceiveProps')
    }

    render() {
        return (
            <div>
                { this.props.content }
                <button onClick={ this.handleClick }>X</button>
            </div>);
    }
    handleClick() {
        // console.log(this.props)
        this.props.deleteItem(this.props.index)
    }
}

XiaojiejieItem.propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}
 
export default XiaojiejieItem;