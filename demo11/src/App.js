import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }
    addCount() {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() { 
        return (
            <div>
                <h1>你点击了 { this.state.count } 次。</h1>
                <button onClick={ this.addCount.bind(this) }>点击我</button>
            </div>
        );
    }
}
 
export default App;