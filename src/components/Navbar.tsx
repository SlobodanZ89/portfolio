import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { useMemo, useState } from 'react'
import { useLanguage } from '../state/language'
import { OutlinedIconButton } from './OutlinedIconButton'

export function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down('md'))
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = useMemo(
    () => [
      { href: '#home', label: t.nav.home },
      { href: '#projects', label: t.nav.projects },
      { href: '#evolution', label: t.nav.evolution },
      { href: '#skills', label: t.nav.skills },
      { href: '#contact', label: t.nav.contact },
    ],
    [t],
  )

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
      <Box
        sx={{
          maxWidth: 1100,
          mx: 'auto',
          px: { xs: 2, sm: 2.5 },
          py: 1.75,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <Box
          component="a"
          href="#home"
          sx={{ color: 'inherit', textDecoration: 'none', fontWeight: 900, letterSpacing: 0.4 }}
        >
          SZ
        </Box>

        <Box component="nav" sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
          {navItems.map((item) => (
            <Box
              key={item.href}
              component="a"
              href={item.href}
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                opacity: 0.9,
                fontWeight: 650,
                '&:hover': { opacity: 1 },
              }}
            >
              {item.label}
            </Box>
          ))}
        </Box>

        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
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

          <IconButton
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(true)}
            sx={{
              display: { xs: 'inline-flex', md: 'none' },
              border: '1px solid rgba(255, 255, 255, 0.28)',
              borderRadius: 2,
              color: 'inherit',
            }}
          >
            <MenuRoundedIcon />
          </IconButton>
        </Stack>
      </Box>

      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        PaperProps={{
          sx: {
            width: 'min(86vw, 360px)',
            bgcolor: 'rgba(18,18,18,0.92)',
            backdropFilter: 'blur(12px)',
            borderLeft: '1px solid rgba(255,255,255,0.10)',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
          <Box>
            <Typography sx={{ fontWeight: 900, letterSpacing: 0.4 }}>Menu</Typography>
            {isSmall ? (
              <Typography variant="body2" sx={{ opacity: 0.75 }}>
                {t.hero.role}
              </Typography>
            ) : null}
          </Box>
          <IconButton aria-label="Close menu" onClick={() => setIsMenuOpen(false)} sx={{ color: 'inherit' }}>
            <CloseRoundedIcon />
          </IconButton>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.10)' }} />

        <List sx={{ px: 1 }}>
          {navItems.map((item) => (
            <ListItemButton
              key={item.href}
              component="a"
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              sx={{
                borderRadius: 2,
                '&:hover': { bgcolor: 'rgba(255,255,255,0.06)' },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ sx: { fontWeight: 750 } }}
              />
            </ListItemButton>
          ))}
        </List>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.10)' }} />

        <Box sx={{ p: 2 }}>
          <Typography variant="body2" sx={{ opacity: 0.75, fontWeight: 650 }}>
            Language
          </Typography>
          <Stack direction="row" spacing={1} sx={{ mt: 1, alignItems: 'center' }}>
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
          </Stack>
        </Box>
      </Drawer>
    </header>
  )
}
