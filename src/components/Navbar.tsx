import { Box } from '@mui/material'
import { useLanguage } from '../state/language'
import { OutlinedIconButton } from './OutlinedIconButton'

export function Navbar() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        backdropFilter: 'blur(10px)',
        background: 'rgba(18, 18, 18, 0.75)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '14px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        <a href="#home" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 800 }}>
          SZ
        </a>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href="#home" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.9 }}>
            {t.nav.home}
          </a>
          <a href="#projects" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.9 }}>
            {t.nav.projects}
          </a>
          <a href="#evolution" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.9 }}>
            {t.nav.evolution}
          </a>
          <a href="#skills" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.9 }}>
            {t.nav.skills}
          </a>
          <a href="#contact" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.9 }}>
            {t.nav.contact}
          </a>
        </nav>

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <OutlinedIconButton
            type="button"
            onClick={() => setLanguage('en')}
            aria-pressed={language === 'en'}
            sx={{
              px: 1.5,
              ...(language === 'en' ? { bgcolor: 'rgba(79, 195, 247, 0.14)', borderColor: 'primary.main' } : {}),
            }}
          >
            EN
          </OutlinedIconButton>
          <OutlinedIconButton
            type="button"
            onClick={() => setLanguage('de')}
            aria-pressed={language === 'de'}
            sx={{
              px: 1.5,
              ...(language === 'de' ? { bgcolor: 'rgba(79, 195, 247, 0.14)', borderColor: 'primary.main' } : {}),
            }}
          >
            DE
          </OutlinedIconButton>
        </Box>
      </div>
    </header>
  )
}
