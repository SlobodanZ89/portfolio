import { Box, Card, CardContent, Typography } from '@mui/material'
import { useLanguage } from '../state/language'

export function Evolution() {
  const { t } = useLanguage()

  return (
    <section id="evolution" style={{ marginTop: 84 }}>
      <Typography variant="h4" sx={{ fontWeight: 900 }}>
        {t.evolution.title}
      </Typography>

      <Box sx={{ mt: 3, display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
        {t.evolution.items.map((item) => (
          <Card
            key={item.title}
            sx={{
              border: '1px solid rgba(255,255,255,0.10)',
              backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 850 }}>
                {item.title}
              </Typography>
              <Typography sx={{ mt: 0.5, opacity: 0.75, fontWeight: 650 }}>{item.subtitle}</Typography>
              <Typography sx={{ mt: 1.25, opacity: 0.9, whiteSpace: 'pre-line' }}>{item.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </section>
  )
}

