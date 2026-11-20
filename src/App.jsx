import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { profile } from './data/content'

export default function App() {
  const year = new Date().getFullYear()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="container footer">
        <span>
          © {year} {profile.name}
        </span>
        <span>{profile.title} · React · Node · SQL</span>
      </footer>
    </>
  )
}
