import Link from 'next/link'
import { Button } from 'antd'

const pageI = () => {
    return (
        <div>
            <h1>Page I</h1>
            <div>
                <Button>我是按钮</Button>
            </div>
            <Link href="/"><a>回到首页</a></Link>
        </div>
    )
}

export default pageI