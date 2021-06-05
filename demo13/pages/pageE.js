import { withRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'

const pageC = ({router, list}) => {
    return (
        <div>
            <h1>Page E</h1>
            <div>{ list }</div>
            <br />
            <Link href="/"><a>回到首页</a></Link>
        </div>
    )
}

pageC.getInitialProps = async () => {
    const promise = new Promise((resolve) => {
        axios('https://easy-mock.bookset.io/mock/60a3753447ef9e51d0ad2a87/react-demo/list/get').then(
            res => {
                console.log('res: ', res)
                resolve(res.data.data)
            },
            err => {
                console.log('err: ', err)
            }
        )
    })
    return await promise
}

export default withRouter(pageC)