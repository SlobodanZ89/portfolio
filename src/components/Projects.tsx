import { Box, Card, CardContent, CardMedia, Chip, Stack, Typography } from '@mui/material'
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded'
import { useMemo, useState } from 'react'
import { OutlinedLinkButton } from './OutlinedLinkButton'
import easyFarmHome from '../assets/projects/easyFarm/home.png'
import easyFarmFinance from '../assets/projects/easyFarm/finance.png'
import kinoSeats from '../assets/projects/kinoApp/seats.png'
import kinoMovies from '../assets/projects/kinoApp/movies.png'
import harvestIqSlogan from '../assets/projects/harvestIQ/Slogan.png'
import { useLanguage } from '../state/language'
import { ImageLightbox, type LightboxImage } from './ImageLightbox'

const cardSx = {
  height: '100%',
  border: '1px solid rgba(255,255,255,0.10)',
  backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
} as const

export function Projects() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<LightboxImage | null>(null)
  const coverMediaSx = { height: 240, objectFit: 'cover' } as const
  const thumbTileSx = { display: 'flex', flexDirection: 'column' } as const
  const thumbImageWrapSx = {
    borderRadius: 2,
    overflow: 'hidden',
    border: '1px solid rgba(255,255,255,0.10)',
    aspectRatio: '16 / 10',
    bgcolor: 'rgba(0,0,0,0.18)',
  } as const

  const images = useMemo(
    () => ({
      easyFarmHome: {
        src: easyFarmHome,
        alt: 'easyFarm dashboard and fields map',
        title: t.projects.screenshots.easyFarmHome.title,
        description: t.projects.screenshots.easyFarmHome.description,
      },
      easyFarmFinance: {
        src: easyFarmFinance,
        alt: 'easyFarm finance planning view',
        title: t.projects.screenshots.easyFarmFinance.title,
        description: t.projects.screenshots.easyFarmFinance.description,
      },
      kinoMovies: {
        src: kinoMovies,
        alt: 'kinoApp movies list view',
        title: t.projects.screenshots.kinoMovies.title,
        description: t.projects.screenshots.kinoMovies.description,
      },
      kinoSeats: {
        src: kinoSeats,
        alt: 'kinoApp seat selection view',
        title: t.projects.screenshots.kinoSeats.title,
        description: t.projects.screenshots.kinoSeats.description,
      },
    }),
    [t],
  )

  const show = (img: LightboxImage) => {
    setActive(img)
    setOpen(true)
  }

  return (
    <section id="projects" style={{ marginTop: 84 }}>
      <Typography variant="h4" sx={{ fontWeight: 900 }}>
        {t.projects.title}
      </Typography>

      <Box
        sx={{
          mt: 3,
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 2,
        }}
      >
        <Card sx={cardSx}>
          <CardMedia
            component="img"
            image={easyFarmHome}
            alt="easyFarm dashboard screenshot"
            loading="lazy"
            sx={coverMediaSx}
          />
          <CardContent>
            <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 850 }}>
                  {t.projects.easyFarm.title}
                </Typography>
                <Typography sx={{ mt: 0.5, opacity: 0.88 }}>{t.projects.easyFarm.description}</Typography>
              </Box>
              <ArrowOutwardRoundedIcon sx={{ opacity: 0.7 }} />
            </Stack>

            <Stack direction="row" spacing={1} useFlexGap sx={{ mt: 1.5, flexWrap: 'wrap' }}>
              {t.projects.easyFarm.stack.map((s) => (
                <Chip key={s} label={s} size="small" variant="outlined" />
              ))}
            </Stack>

            <Stack direction="row" spacing={1} useFlexGap sx={{ mt: 1.25, flexWrap: 'wrap' }}>
              {t.projects.easyFarm.features.map((f) => (
                <Chip key={f} label={f} size="small" color="primary" variant="filled" />
              ))}
            </Stack>

            <Box
              sx={{
                mt: 2,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 1,
              }}
            >
              <Box sx={thumbTileSx}>
                <Box sx={thumbImageWrapSx}>
                  <button
                    type="button"
                    onClick={() => show(images.easyFarmHome)}
                    style={{ all: 'unset', cursor: 'pointer', display: 'block', width: '100%', height: '100%' }}
                    aria-label={`${images.easyFarmHome.title}: ${images.easyFarmHome.description}`}
                  >
                    <img
                      src={images.easyFarmHome.src}
                      alt={images.easyFarmHome.alt}
                      loading="lazy"
                      style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </button>
                </Box>
                <Typography sx={{ px: 1, py: 0.75, opacity: 0.85 }} variant="caption">
                  <b>{images.easyFarmHome.title}</b> — {images.easyFarmHome.description}
                </Typography>
              </Box>
              <Box sx={thumbTileSx}>
                <Box sx={thumbImageWrapSx}>
                  <button
                    type="button"
                    onClick={() => show(images.easyFarmFinance)}
                    style={{ all: 'unset', cursor: 'pointer', display: 'block', width: '100%', height: '100%' }}
                    aria-label={`${images.easyFarmFinance.title}: ${images.easyFarmFinance.description}`}
                  >
                    <img
                      src={images.easyFarmFinance.src}
                      alt={images.easyFarmFinance.alt}
                      loading="lazy"
                      style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </button>
                </Box>
                <Typography sx={{ px: 1, py: 0.75, opacity: 0.85 }} variant="caption">
                  <b>{images.easyFarmFinance.title}</b> — {images.easyFarmFinance.description}
                </Typography>
              </Box>
            </Box>

            <Stack direction="row" spacing={1} useFlexGap sx={{ mt: 2, flexWrap: 'wrap' }}>
              <OutlinedLinkButton href="https://gitlab.com/SlobodanZ/easyfarm" target="_blank" rel="noreferrer">
                easyFarm
              </OutlinedLinkButton>
            </Stack>
          </CardContent>
        </Card>

        <Card sx={cardSx}>
          <CardMedia
            component="img"
            image={kinoMovies}
            alt="kinoApp movies list screenshot"
            loading="lazy"
            sx={coverMediaSx}
          />
          <CardContent>
            <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 850 }}>
                  {t.projects.kinoApp.title}
                </Typography>
                <Typography sx={{ mt: 0.5, opacity: 0.88 }}>{t.projects.kinoApp.description}</Typography>
              </Box>
              <ArrowOutwardRoundedIcon sx={{ opacity: 0.7 }} />
            </Stack>

            <Stack direction="row" spacing={1} useFlexGap sx={{ mt: 1.5, flexWrap: 'wrap' }}>
              {t.projects.kinoApp.stack.map((s) => (
                <Chip key={s} label={s} size="small" variant="outlined" />
              ))}
            </Stack>

            <Stack direction="row" spacing={1} useFlexGap sx={{ mt: 1.25, flexWrap: 'wrap' }}>
              {t.projects.kinoApp.features.map((f) => (
                <Chip key={f} label={f} size="small" color="primary" variant="filled" />
              ))}
            </Stack>

            <Box
              sx={{
                mt: 2,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 1,
              }}
            >
              <Box sx={thumbTileSx}>
                <Box sx={thumbImageWrapSx}>
                  <button
                    type="button"
                    onClick={() => show(images.kinoMovies)}
                    style={{ all: 'unset', cursor: 'pointer', display: 'block', width: '100%', height: '100%' }}
                    aria-label={`${images.kinoMovies.title}: ${images.kinoMovies.description}`}
                  >
                    <img
                      src={images.kinoMovies.src}
                      alt={images.kinoMovies.alt}
                      loading="lazy"
                      style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </button>
                </Box>
                <Typography sx={{ px: 1, py: 0.75, opacity: 0.85 }} variant="caption">
                  <b>{images.kinoMovies.title}</b> — {images.kinoMovies.description}
                </Typography>
              </Box>
              <Box sx={thumbTileSx}>
                <Box sx={thumbImageWrapSx}>
                  <button
                    type="button"
                    onClick={() => show(images.kinoSeats)}
                    style={{ all: 'unset', cursor: 'pointer', display: 'block', width: '100%', height: '100%' }}
                    aria-label={`${images.kinoSeats.title}: ${images.kinoSeats.description}`}
                  >
                    <img
                      src={images.kinoSeats.src}
                      alt={images.kinoSeats.alt}
                      loading="lazy"
                      style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </button>
                </Box>
                <Typography sx={{ px: 1, py: 0.75, opacity: 0.85 }} variant="caption">
                  <b>{images.kinoSeats.title}</b> — {images.kinoSeats.description}
                </Typography>
              </Box>
            </Box>

            <Stack direction="row" spacing={1} useFlexGap sx={{ mt: 2, flexWrap: 'wrap' }}>
              <OutlinedLinkButton href="https://github.com/SlobodanZ89/MovieTheater" target="_blank" rel="noreferrer">
                MovieTheater
              </OutlinedLinkButton>
            </Stack>
          </CardContent>
        </Card>

        <Card sx={cardSx}>
          <CardMedia component="img" image={harvestIqSlogan} alt="HarvestIQ slogan" loading="lazy" sx={coverMediaSx} />
          <CardContent>
            <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 850 }}>
                  {t.projects.harvestIQ.title}
                </Typography>
                <Typography sx={{ mt: 0.5, opacity: 0.88 }}>{t.projects.harvestIQ.description}</Typography>
              </Box>
              <Chip label={t.projects.harvestIQ.comingSoon} color="warning" variant="outlined" size="small" />
            </Stack>

            <Stack direction="row" spacing={1} useFlexGap sx={{ mt: 1.5, flexWrap: 'wrap' }}>
              {t.projects.harvestIQ.stack.map((s) => (
                <Chip key={s} label={s} size="small" variant="outlined" />
              ))}
            </Stack>

            <Stack direction="row" spacing={1} useFlexGap sx={{ mt: 1.25, flexWrap: 'wrap' }}>
              {t.projects.harvestIQ.features.map((f) => (
                <Chip key={f} label={f} size="small" color="primary" variant="filled" />
              ))}
            </Stack>

            <Stack direction="row" spacing={1} useFlexGap sx={{ mt: 2, flexWrap: 'wrap' }}>
              <OutlinedLinkButton href="#projects" endIcon={null} disabled>
                {t.projects.harvestIQ.comingSoon}
              </OutlinedLinkButton>
            </Stack>
          </CardContent>
        </Card>
      </Box>

      {active ? <ImageLightbox open={open} onClose={() => setOpen(false)} image={active} /> : null}
    </section>
  )
}

