import { Button, type ButtonProps } from '@mui/material'

const sharedSx = {
  fontWeight: 700,
  textTransform: 'none' as const,
  minWidth: 44,
  borderColor: 'rgba(255, 255, 255, 0.28)',
  '&:hover': { borderColor: 'rgba(255, 255, 255, 0.45)' },
}

export function OutlinedIconButton({ sx, ...props }: ButtonProps) {
  return <Button variant="outlined" sx={{ ...sharedSx, ...sx }} {...props} />
}
