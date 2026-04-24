import { Alert, Box, Card, CardContent, Stack, TextField, Typography } from '@mui/material'
import { useMemo, useState } from 'react'
import { useLanguage } from '../state/language'
import { OutlinedLinkButton } from './OutlinedLinkButton'

function encodeFormBody(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key] ?? '')}`)
    .join('&')
}

export function Contact() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [values, setValues] = useState({ name: '', email: '', message: '' })

  const isValid = useMemo(() => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())
    return values.name.trim().length > 1 && emailOk && values.message.trim().length > 5
  }, [values])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isValid || status === 'sending') return

    setStatus('sending')
    try {
      const body = encodeFormBody({
        'form-name': 'contact',
        name: values.name,
        email: values.email,
        message: values.message,
      })

      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
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
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={onSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

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
                <OutlinedLinkButton type="submit" disabled={!isValid || status === 'sending'} endIcon={null}>
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

