import { Box, Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

export type LightboxImage = {
  src: string
  alt: string
  title: string
  description: string
}

export function ImageLightbox({
  open,
  onClose,
  image,
}: {
  open: boolean
  onClose: () => void
  image: LightboxImage
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: 3,
            border: '1px solid rgba(255,255,255,0.10)',
            backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
          },
        },
      }}
    >
      <DialogTitle sx={{ pr: 7 }}>
        <Typography variant="h6" sx={{ fontWeight: 850 }}>
          {image.title}
        </Typography>
        <IconButton
          onClick={onClose}
          aria-label="Close"
          sx={{ position: 'absolute', right: 10, top: 10 }}
        >
          <CloseRoundedIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ pt: 0 }}>
        <Box
          sx={{
            borderRadius: 2,
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.10)',
            background: '#0d0d0d',
          }}
        >
          <img
            src={image.src}
            alt={image.alt}
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              maxHeight: '70vh',
              objectFit: 'contain',
            }}
          />
        </Box>

        <Typography sx={{ mt: 1.5, opacity: 0.9 }}>{image.description}</Typography>
      </DialogContent>
    </Dialog>
  )
}

