import React, { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const Lazy = dynamic(import('../components/lazy'))  // Here!

function Time() {
    const [nowTime, setTime] = useState(Date.now())

    const changeTime = async () => {
        const moment = await import('moment')   // Here!
        setTime(moment.default(Date.now()).format('YYYY-MM-DD hh:mm:ss'))
    }

    return (
        <div>
            <h1>Page G</h1>
            <div>显示时间为：{ nowTime }</div>
            <div>
                <button onClick={changeTime}>改变时间格式</button>
            </div>
            <Lazy></Lazy>
            <Link href="/"><a>回到首页</a></Link>
        </div>
    )
}

export default Time