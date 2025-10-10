import './App.css'
import { Hero } from './hero'
import { Experience } from './Experience'
import { Skills } from './Skills'
import { Projects } from './Projects'
import { Contact } from './Contact'
import { Footer } from './Footer'

function App() {
  return (
    <div className="app">
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
