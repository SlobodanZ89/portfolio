import { Alert, Box, Card, CardContent, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useLanguage } from '../state/language'
import { OutlinedLinkButton } from './OutlinedLinkButton'

function mailtoHref(to: string, subject: string, body: string) {
  const params = new URLSearchParams({ subject, body })
  return `mailto:${encodeURIComponent(to)}?${params.toString()}`
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

export function Contact() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const endpoint = (import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined)?.trim()
  const fallbackTo = 'slobodan.zivojinovic1989@gmail.com'

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')
    try {
      // Use FormData so browser autofill is supported reliably.
      const fd = new FormData(e.currentTarget)
      const payload = {
        name: String(fd.get('name') ?? '').trim(),
        email: String(fd.get('email') ?? '').trim(),
        message: String(fd.get('message') ?? '').trim(),
      }

      const valid = payload.name.length > 1 && isValidEmail(payload.email) && payload.message.length > 5
      if (!valid) {
        setStatus('error')
        return
      }

      if (!endpoint) {
        const subject = `Portfolio contact from ${payload.name}`
        const body = `Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`
        window.location.href = mailtoHref(fallbackTo, subject, body)
        setStatus('success')
        return
      }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error(`Contact form failed: ${res.status}`)
      setStatus('success')
      setValues({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" style={{ marginTop: 84 }}>
      <Typography variant="h4" sx={{ fontWeight: 900 }}>
        {t.contact.title}
      </Typography>
      <Typography sx={{ mt: 1, opacity: 0.9, maxWidth: 720 }}>{t.contact.intro}</Typography>

      <Card
        sx={{
          mt: 3,
          border: '1px solid rgba(255,255,255,0.10)',
          backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
        }}
      >
        <CardContent>
          <Box
            component="form"
            name="contact"
            method="POST"
            onSubmit={onSubmit}
          >
            <Stack spacing={1.5} sx={{ maxWidth: 720 }}>
              {status === 'success' ? <Alert severity="success">{t.contact.success}</Alert> : null}
              {status === 'error' ? <Alert severity="error">{t.contact.error}</Alert> : null}

              <TextField
                name="name"
                label={t.contact.nameLabel}
                value={values.name}
                onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                autoComplete="name"
                required
                fullWidth
              />
              <TextField
                name="email"
                label={t.contact.emailLabel}
                value={values.email}
                onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                autoComplete="email"
                required
                type="email"
                fullWidth
              />
              <TextField
                name="message"
                label={t.contact.messageLabel}
                value={values.message}
                onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                required
                multiline
                minRows={5}
                fullWidth
              />

              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <OutlinedLinkButton type="submit" disabled={status === 'sending'} endIcon={null}>
                  {status === 'sending' ? t.contact.sending : t.contact.send}
                </OutlinedLinkButton>
              </Box>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </section>
  )
}

