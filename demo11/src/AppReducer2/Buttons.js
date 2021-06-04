import React, { useContext } from 'react';
import { ColorContext, UPDATE_COLOR } from './Color'

function Buttons() {
    // 接入Color作用域，然后拿到dispatch操作权
    const { dispatch } = useContext(ColorContext)
    return (
        <div>
            {/* 使用dispatch发送动作信息 */}
            <button onClick={() => dispatch({ type: UPDATE_COLOR, color: 'red' })}>红色</button>
            {/* 使用dispatch发送另一个动作信息 */}
            <button onClick={() => dispatch({ type: UPDATE_COLOR, color: 'blue' })}>蓝色</button>
        </div>
    )
}

export default Buttons