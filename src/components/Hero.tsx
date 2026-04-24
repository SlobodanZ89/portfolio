import { Box, Stack } from '@mui/material'
import headshotUrl from '../assets/images/headshot.jpg'
import { useLanguage } from '../state/language'
import { OutlinedLinkButton } from './OutlinedLinkButton'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="hero-layout"
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 0.85fr)',
        gap: 36,
        alignItems: 'center',
        paddingTop: 40,
      }}
    >
      <div>
        <p style={{ margin: 0, opacity: 0.75, fontWeight: 650, letterSpacing: 0.6 }}>{t.hero.role}</p>
        <h1 style={{ margin: '12px 0 0', fontSize: 52, lineHeight: 1.05 }}>{t.hero.name}</h1>
        <p style={{ marginTop: 14, maxWidth: 720, opacity: 0.9, fontSize: 18 }}>{t.hero.tagline}</p>
        <p style={{ marginTop: 16, maxWidth: 720, opacity: 0.82, fontSize: 15, lineHeight: 1.65 }}>{t.hero.profileSummary}</p>

        <Stack direction="row" spacing={1} useFlexGap sx={{ mt: 2.75, flexWrap: 'wrap', alignItems: 'center' }}>
          <OutlinedLinkButton href="#projects" endIcon={null}>
            {t.hero.ctaProjects}
          </OutlinedLinkButton>
        </Stack>

        <Stack direction="row" spacing={1} useFlexGap sx={{ mt: 2, flexWrap: 'wrap', alignItems: 'center' }}>
          <OutlinedLinkButton
            href="https://www.linkedin.com/in/slobodan-zivojinovic"
            target="_blank"
            rel="noreferrer"
          >
            <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
              <Box component="i" className="fa-brands fa-linkedin" sx={{ fontSize: 18 }} aria-hidden />
              LinkedIn
            </Box>
          </OutlinedLinkButton>
          <OutlinedLinkButton href="https://github.com/SlobodanZ89" target="_blank" rel="noreferrer">
            <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
              <Box component="i" className="fa-brands fa-github" sx={{ fontSize: 18 }} aria-hidden />
              GitHub
            </Box>
          </OutlinedLinkButton>
          <OutlinedLinkButton href="https://gitlab.com/SlobodanZ" target="_blank" rel="noreferrer">
            <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
              <Box component="i" className="fa-brands fa-gitlab" sx={{ fontSize: 18 }} aria-hidden />
              GitLab
            </Box>
          </OutlinedLinkButton>
        </Stack>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            width: 280,
            aspectRatio: '1 / 1',
            borderRadius: 999,
            padding: 3,
            background: 'linear-gradient(135deg, #4fc3f7, rgba(255,255,255,0.12))',
          }}
        >
          <img
            src={headshotUrl}
            alt="Slobodan Zivojinovic"
            loading="eager"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 999 }}
          />
        </div>
      </div>
    </section>
  )
}
