import Link from 'next/link'

export default function pageB() {
    return (
        <div>
            <h1>Page B</h1>
            <Link href="/"><a>回到首页</a></Link>
        </div>
    )
}