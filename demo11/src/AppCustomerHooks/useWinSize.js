import { useState, useEffect, useCallback } from 'react'

function useWinSize() {
    // 定义一个size，一个设置size的方法
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,    // 设置初始值
        height: document.documentElement.clientHeight,
    })

    // 使用useCallback缓存方法（useMemo是缓存变量）
    const onResize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
        })
    }, [])

    // 视图每次渲染时会执行useEffect
    useEffect(() => {
        // 监听窗体resize事件
        window.addEventListener('resize', onResize)
        // 防止一直监听
        return () => {
            window.removeEventListener('resize', onResize)
        }
    })

    return size
}

export default useWinSize