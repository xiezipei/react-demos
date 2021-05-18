import React, { Component } from 'react';   // imrc
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {    // cc
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    componentWillMount(){
        console.log('componentWillMount----组件将要挂载到页面的时刻')
    }
    componentDidMount(){
        console.log('componentDidMount----组件挂载完成的时刻执行')
    }
    render() {
        console.log('render---组件挂载中.......')
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