import Link from 'next/link'
import Router from 'next/router'

const Home = () => {
  function gotoPageA() {
    Router.push('/pageA')
  }
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li><Link href="/pageA"><a>Go to Page A.</a></Link></li>
        <li><Link href="/pageB"><a>Go to Page B.</a></Link></li>
      </ul>
      <div>
        <button onClick={gotoPageA}>跳转到PageA</button>
      </div>
    </div>
  )
}

export default Home