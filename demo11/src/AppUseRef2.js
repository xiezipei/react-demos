import React, { useEffect, useRef, useState } from 'react';

/**
 * `useRef` 保存普通变量
 */
function AppUseRef2() {
    // input引用
    const inputEl = useRef(null)

    // 按钮点击事件，通过input引用设置input值，并打印到控制台
    const onBtnClick = () => {
        inputEl.current.value = 'Hello, useRef'
        console.log(inputEl)
    }

    const [text, setText] = useState('Tony')
    
    const textRef = useRef()

    // 用 useEffect 函数实现每次状态变化都进行变量修改，并打印
    useEffect(() => {
        textRef.current = text;
        console.log('textRef.current: ', textRef.current)
    })

    return (
        <div>
            {/* 保存input的ref到inputEL */}
            <input ref={inputEl} type="text" />
            <button onClick={onBtnClick}>在input上显示文字</button>
            <br />
            <input value={text} onChange={e => { setText(e.target.value) }} />
        </div>
    )
}

export default AppUseRef2