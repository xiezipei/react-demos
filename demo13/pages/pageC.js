import { withRouter } from 'next/router'
import Link from 'next/link'

const pageC = ({router}) => {
    return (
        <div>
            <h1>Page C</h1>
            <p>router.query.name: { router.query.name }</p>
            <Link href="/"><a>回到首页</a></Link>
        </div>
    )
}

export default withRouter(pageC)