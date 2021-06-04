import React, { useState, createContext, useContext } from 'react';

const CountContext = createContext()

function Counter() {
    const count = useContext(CountContext)
    return (
        <h2>{count}</h2>
    )
}

function AppUseContext() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>你点击了{count}次。</p>
            <button onClick={() => { setCount(count + 1) }}>点击我</button>
            <CountContext.Provider value={ count }>
                <Counter  />
            </CountContext.Provider>
        </div>
    )
}

export default AppUseContext