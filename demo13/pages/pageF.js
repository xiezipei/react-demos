import { withRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'

const pageF = ({ router }) => {
    const [textColor, setTextColor] = useState('blue')

    const changeColor = () => {
        setTextColor(textColor === 'blue' ? 'green' : 'blue')
    }

    return (
        <div>
            <h1>Page F</h1>
            <p>动态设置颜色</p>
            <button onClick={changeColor}>改变颜色</button>
            <br />
            <br />
            <Link href="/"><a>回到首页</a></Link>
            <style jsx>
                {`
                    h1 { color: red }
                    p { color: ${textColor} }
                `}
            </style>
        </div>

    )
}

export default withRouter(pageF)