import Link from 'next/link'
import Head from "next/head";

const pageH = () => {
    return (
        <div>
            <Head>
                <title>Next.js 教程学习</title>
                <meta charSet='utf-8'></meta>
            </Head>
            <h1>Page H</h1>
            <Link href="/"><a>回到首页</a></Link>
        </div>
    )
}

export default pageH