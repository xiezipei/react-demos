import React, { Component, Fragment } from 'react';
import './css/boss.css'
import { CSSTransition } from 'react-transition-group'

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
        this.toToggle = this.toToggle.bind(this);
    }

    // render() { 
    //     return (
    //         <Fragment>
    //             <div className={ this.state.isShow ? 'show' : 'hide' }>Boss级人物 - 孙悟空</div>
    //             <div><button onClick={ this.toToggle }>{ this.state.isShow ? '隐藏Boss' : '召唤Boss' }</button></div>
    //         </Fragment>
    //     );
    // }

    render() {
        return (
            <Fragment>
                <CSSTransition
                    in={ this.state.isShow }
                    timeout= { 2000 }
                    classNames="boss-text"
                >
                    <div>Boss级人物-孙悟空</div>
                </CSSTransition>
                <div><button onClick={ this.toToggle }>{ this.state.isShow ? '隐藏Boss' : '召唤Boss' }</button></div>
            </Fragment>
        )
    }

    toToggle() {
        this.setState({
            isShow: !this.state.isShow
        })
    }
}

export default Boss;