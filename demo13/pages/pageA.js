import Link from 'next/link'

export default function pageA() {
    return (
        <div>
            <h1>Page A</h1>
            <Link href="/"><a>回到首页</a></Link>
        </div>
    )
}