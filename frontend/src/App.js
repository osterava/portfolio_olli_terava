import React from "react"
import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import "./App.css"

const App = () => {
  return (
    <div>
      <Header />
      <About />
        <div className="Merge">
          <Skills />
          <Projects />
        </div>
      <Contact />
    </div>
  )
}
export default App
