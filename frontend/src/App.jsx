import About from "./components/about/about"
import Footers from "./components/footer/footer"
import Hero from "./components/hero/hero"
import Jobs from "./components/jobs/jobs"
import Navbar from "./components/navbar/navbar"
import Project from "./components/project/project"
import Skills from "./components/skills/skills"

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

      <div id="projects">
        <Project/>
      </div>

      <div id="skills">
        <Skills/>
      </div>
        
      <div>
       <Footers/>
      </div>
    </>
  )
}

export default App
