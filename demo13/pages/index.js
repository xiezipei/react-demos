import React from 'react';
import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li><Link href="/pageA"><a>Go to Page A.</a></Link></li>
        <li><Link href="/pageB"><a>Go to Page B.</a></Link></li>
      </ul>
    </div>
  )
}

export default Home