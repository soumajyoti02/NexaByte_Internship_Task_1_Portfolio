import Image from 'next/image'
import Navbar from './components/Navbar/page'
import Hero from './components/Hero/page'
import Skills from './components/Skills/page'

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Skills />
    </main>
  )
}
