import Image from 'next/image'
import Navbar from './components/Navbar/page'
import Hero from './components/Hero/page'
import Skills from './components/Skills/page'
import Projects from './components/Projects/page'
import Education from './components/Education/page'
import Contact from './components/Contact/page'
import Footer from './components/Footer/page'

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
