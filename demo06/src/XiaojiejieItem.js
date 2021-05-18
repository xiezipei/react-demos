import React, { Component } from 'react';   // imrc
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {    // cc
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    // 性能优化
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, this.props);
        if (nextProps.content !== this.props.content) {
            console.log(1)
            return true
        } else {
            console.log(0)
            return false
        }
    }

    render() {
        console.log('child-render') // 频繁渲染引起性能问题
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