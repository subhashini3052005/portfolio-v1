import About from "./components/about/about"
import Hero from "./components/hero/hero"
import Jobs from "./components/jobs/jobs"
import Navbar from "./components/navbar/navbar"

function App() {

  return (
    <>
      <Navbar/>
      <div id="home"> 
      <Hero/>
      </div>
      <div id="about">
      <About/>
      </div>
      <div>
        <Jobs/>
      </div>
    </>
  )
}

export default App
