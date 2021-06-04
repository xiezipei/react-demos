import React, { useRef } from 'react';

/**
 * `useRef` 获取 `DOM` 元素
 */
function AppUseRef() {
    const inputEl = useRef(null)
    const onBtnClick = () => {
        inputEl.current.value = 'Hello, Tonny'
        console.log(inputEl)
    }
    return (
        <div>
            {/* 保存input的ref到inputEL */}
            <input ref={inputEl} type="text" />
            <button onClick={ onBtnClick }>在input上显示文字</button>
        </div>
    )
}

export default AppUseRef