import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    state = { 
        list: []
     }

    componentDidMount() {
        axios.get('https://easy-mock.bookset.io/mock/60a3753447ef9e51d0ad2a87/react-demo/list/get')
            .then(res => {
                console.log('success', res);
                this.setState({
                    list: res.data.data
                })
                console.log(this.state.list);
            })
            .catch(err => console.log('fail', err));
    }

    render() { 
        return (
            <div>
                <h1>Mock Demo</h1>
                <ul>
                    { this.state.list.map((item, index) => <li key={ index }>{ item }</li>) }
                </ul>
            </div>
        );
    }
}
 
export default App;