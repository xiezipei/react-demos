import React, { Component } from 'react';

class LifeCycle extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }
    componentDidMount = () => console.log(`你点击了${this.state.count}次。`)
    componentDidUpdate = () => console.log(`你点击了${this.state.count}次。`)
    addCount() {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() { 
        return (
            <div>
                <p>你点击了 { this.state.count } 次。</p>
                <button onClick={ this.addCount.bind(this) }>
                    点击我
                </button>
            </div>
        )
    }
}
 
export default LifeCycle