import Link from 'next/link'
import Router from 'next/router'
import MyHeader from "../components/Header"
import { Button } from "antd";

const Home = () => {
  /**
   * 跳转到 PageA
   */
  function gotoPageA() {
    Router.push('/pageA')
  }

  /**
   * 跳转到 PageB
   */
  function gotoPageC() {
    // Router.push('/pageC?name=456')

    // 对象式传参
    Router.push({
      pathname: '/pageC',
      query: {
        name: 456
      }
    })
  }

  /**
   * 路由监听：routeChangeStart
   * 
   * 路由开始变化
   */
  Router.events.on('routeChangeStart', (...args) => {
    // console.log('= 1. routeChangeStart 路由开始变化,参数为:', ...args)
    console.log('= 1. 路由开始变化')
  })

  /**
   * 路由监听：routeChangeComplete
   */
  Router.events.on('routeChangeComplete', (...args) => {
    console.log('== 2. 路由变化完成')
  })

  /**
   * 路由监听：beforeHistoryChange
   */
  Router.events.on('beforeHistoryChange', (...args) => {
    console.log('=== 3. 在改变浏览器 history 之前触发')
  })

  /**
   * 路由监听：routeChangeError
   */
  Router.events.on('routeChangeError', (...args) => {
    console.log('==== 4. 跳转发生错误')
  })

  /**
   * 路由监听：hashChangeStart
   */
  Router.events.on('hashChangeStart', (...args) => {
    console.log('===== 5. hash跳转开始时执行')
  })

  /**
   * 路由监听：hashChangeComplete
   */
  Router.events.on('hashChangeComplete', (...args) => {
    console.log('====== 6. hash跳转完成时')
  })

  /**
   * 模板渲染
   */
  return (
    <div>
      <MyHeader />
      <h1>Home</h1>
      <ul>
        <li><Link href="/pageA"><a>Go to Page A</a></Link></li>
        <li><Link href="/pageB"><a>Go to Page B</a></Link></li>
        {/* <li><Link href="/pageC?name=123"><a>Go to Page C with 123.</a></Link></li> */}
        {/* 对象式传参 */}
        <li><Link href={{ pathname: '/pageC', query: { name: '123' } }}><a>Go to Page C with 123</a></Link></li>
        <li><Link href="#pageD"><a>Go to Page D with hash</a></Link></li>
        <li><Link href="/pageE"><a>Go to Page E and request data</a></Link></li>
        <li><Link href="/pageF"><a>Go to Page F with style</a></Link></li>
        <li><Link href="/pageG"><a>Go to Page G with lazy loading</a></Link></li>
        <li><Link href="/pageH"><a>Go to Page H with head content</a></Link></li>
        <li><Link href="/pageI"><a>Go to Page I with Ant Design UI</a></Link></li>
      </ul>
      <br />
      <div>
        <Button onClick={gotoPageA}>跳转到PageA</Button>
        <Button onClick={gotoPageC}>跳转到PageC with 456</Button>
      </div>
    </div>
  )

}

export default Home