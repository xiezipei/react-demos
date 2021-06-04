import React, { useContext } from 'react';
import { ColorContext } from './Color'

function ShowArea() {
    // 接入Color组件作用域，并拿到color变量
    const { color } = useContext(ColorContext)
    return (
        // 根据拿到的color值动态改变颜色
        <div style={{ color: color }}>
            字体颜色为：{color}
        </div>
    )
}

export default ShowArea