import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Evolution } from './components/Evolution'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { useLanguage } from './state/language'

export default function App() {
  useLanguage()

  return (
    <div>
      <Navbar />

      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 20px 96px' }}>
        <Hero />

        <Projects />
        <Evolution />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

