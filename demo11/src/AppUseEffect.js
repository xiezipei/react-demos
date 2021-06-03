import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

/** 首页组件 */
function Index() {
    useEffect(() => {   // 副作用
        console.log('进入 Index 页面')
        return () => {  // 解绑副作用
            console.log('离开 Index 页面')
        }
    }, []) // 状态对应的变量，[]表示当数组将被销毁时才进行解绑
    return (   // 渲染
        <h2>Index page.</h2>
    )
}

/** 列表页组件 */
function List() {
    useEffect(() => {   // 副作用
        console.log('进入 List 页面')
        return () => {  // 解绑副作用
            console.log('离开 List 页面')
        }
    }, [])  // 状态对应的变量，[]表示当数组将被销毁时才进行解绑
    return (    // 渲染
        <h2>List page.</h2>
    )
}

/** 主视图组件 */
function AppUseEffect() {
    const [count, setCount] = useState(0)
    useEffect(() => {   // 副作用
        console.log(1)
        return () => {  // 解绑副作用
            console.log(2)
        }
    }, [count]) // 监听count状态变量
    return (    // 渲染
        <div>
            <p>你点击了{ count }次。</p>
            <button onClick={() => {setCount(count + 1)}}>点击我</button>
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list/">列表</Link></li>
                </ul>
                <Route path="/" exact component={Index}></Route>
                <Route path="/list/" component={List}></Route>
            </Router>
        </div>
    )
}

export default AppUseEffect