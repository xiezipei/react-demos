import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './TodoList'
import { Provider } from 'react-redux'
import store from './store'

const App = (
    // 使用 Provider 把程序框起来，从而达到变量共享目的
    <Provider store={ store }>
        <TodoList />
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'))