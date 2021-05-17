import React, { Component } from 'react'

/** 
 * 上面是es6解构赋值写法，等价于
 */
// import React from 'react'
// const Component = React.Component

class App extends Component {
    render() {
        return (
            <ul className="my-list">
                <li>{ false ? 'apple' : 'pear'} </li>
            </ul>
        )
    }
}

export default App;