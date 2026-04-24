import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Evolution } from './components/Evolution'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Box } from '@mui/material'
import { useLanguage } from './state/language'

export default function App() {
  useLanguage()

  return (
    <div>
      <Navbar />

      <Box
        component="main"
        sx={{
          maxWidth: 1100,
          mx: 'auto',
          px: { xs: 2, sm: 2.5 },
          pt: { xs: 4, sm: 6 },
          pb: { xs: 10, sm: 12 },
          textAlign: { xs: 'center', md: 'left' },
          '& p': { mx: { xs: 'auto', md: 0 } },
        }}
      >
        <Hero />

        <Projects />
        <Evolution />
        <Skills />
        <Contact />
      </Box>
    </div>
  )
}

