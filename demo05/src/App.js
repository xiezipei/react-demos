import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    state = {  }

    componentDidMount() {
        axios.get('http://book.douban.com/review/1000104/')
            .then(res => console.log('success', res))
            .catch(err => console.log('fail', err));
    }

    render() { 
        return (<div>Mock Demo</div>);
    }
}
 
export default App;