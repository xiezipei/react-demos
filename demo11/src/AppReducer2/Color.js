import React, { createContext, useReducer } from 'react';

// 定义了个作用域并导出共享
export const ColorContext = createContext({})

// 定义了操作类型并导出共享
export const UPDATE_COLOR = 'UPDATE_COLOR'

// 定义了reducer处理业务逻辑
const reducer = (state, action) => {
    switch(action.type) {
        case UPDATE_COLOR:
            return action.color
        default:
            return state
    }
}

// Color组件方法
export const Color = props => {
    const [color, dispatch] = useReducer(reducer, 'blue')
    return (
        <ColorContext.Provider value={{ color, dispatch }}>
            { props.children }
        </ColorContext.Provider>
    )
}