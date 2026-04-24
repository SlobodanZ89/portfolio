import { Box, Card, CardContent, Chip, Stack, Typography } from '@mui/material'
import { useLanguage } from '../state/language'

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <Card
      sx={{
        height: '100%',
        border: '1px solid rgba(255,255,255,0.10)',
        backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 850 }}>
          {title}
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap sx={{ mt: 1.5, flexWrap: 'wrap' }}>
          {items.map((s) => (
            <Chip key={s} label={s} color="primary" variant="outlined" />
          ))}
        </Stack>
      </CardContent>
    </Card>
  )
}

export function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" style={{ marginTop: 84 }}>
      <Typography variant="h4" sx={{ fontWeight: 900 }}>
        {t.skills.title}
      </Typography>

      <Box
        sx={{
          mt: 3,
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(3, minmax(0, 1fr))' },
          gap: 2,
        }}
      >
        <SkillGroup title={t.skills.frontend.title} items={t.skills.frontend.items} />
        <SkillGroup title={t.skills.backend.title} items={t.skills.backend.items} />
        <SkillGroup title={t.skills.data.title} items={t.skills.data.items} />
        <SkillGroup title={t.skills.tools.title} items={t.skills.tools.items} />
        <SkillGroup title={t.skills.projectManagement.title} items={t.skills.projectManagement.items} />
        <SkillGroup title={t.skills.languages.title} items={t.skills.languages.items} />
      </Box>
    </section>
  )
}

