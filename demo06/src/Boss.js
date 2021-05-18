import React, { Component, Fragment } from 'react';
import './css/boss.css'

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        }
        this.toToggle = this.toToggle.bind(this);
    }
    render() { 
        return (
            <Fragment>
                <div className={ this.state.isShow ? 'show' : 'hide' }>Boss级人物 - 孙悟空</div>
                <div><button onClick={ this.toToggle }>{ this.state.isShow ? '隐藏Boss' : '召唤Boss' }</button></div>
            </Fragment>
        );
    }

    toToggle() {
        this.setState({
            isShow: !this.state.isShow
        })
    }
}

export default Boss;