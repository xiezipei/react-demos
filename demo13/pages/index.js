import Link from 'next/link'
import Router from 'next/router'

const Home = () => {
  function gotoPageA() {
    Router.push('/pageA')
  }

  function gotoPageC() {
    Router.push('/pageC?name=456')
  }

  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li><Link href="/pageA"><a>Go to Page A.</a></Link></li>
        <li><Link href="/pageB"><a>Go to Page B.</a></Link></li>
        <li><Link href="/pageC?name=123"><a>Go to Page C with 123.</a></Link></li>
      </ul>
      <div>
        <button onClick={gotoPageA}>跳转到PageA</button>
        <button onClick={gotoPageC}>跳转到PageC with 456</button>
      </div>
    </div>
  )
}

export default Home