import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded'
import { Button, type ButtonProps } from '@mui/material'
import type { AnchorHTMLAttributes } from 'react'

const sharedSx = {
  fontWeight: 700,
  textTransform: 'none' as const,
  borderColor: 'rgba(255, 255, 255, 0.28)',
  '&:hover': { borderColor: 'rgba(255, 255, 255, 0.45)' },
}

export type OutlinedLinkButtonProps = ButtonProps &
  Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel' | 'download'>

export function OutlinedLinkButton({
  endIcon = <ArrowOutwardRoundedIcon />,
  sx,
  ...props
}: OutlinedLinkButtonProps) {
  return <Button variant="outlined" endIcon={endIcon} sx={{ ...sharedSx, ...sx }} {...props} />
}
