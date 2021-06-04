import React from 'react'
import useWinSize from './useWinSize'

function AppCustomerHooks() {
    const size = useWinSize()
    return (
        <div>页面Size：{size.width} x {size.height}</div>
    )
}

export default AppCustomerHooks