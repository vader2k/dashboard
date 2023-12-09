import {Aunction, Hero, Navbar, Statistics, Trending , Footer } from '../components'

const Layout = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
     <div>
        <Hero/>
     </div>
     <div>
        <Aunction/>
     </div>
      <div>
        <Statistics/>
      </div>
      <div>
          <Trending/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout
