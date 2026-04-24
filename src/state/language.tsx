import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { Language } from '../content/content'
import { CONTENT } from '../content/content'

type LanguageContextValue = {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof CONTENT.en
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'portfolio_language'

function getInitialLanguage(): Language {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'en' || saved === 'de') return saved
  return 'en'
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => getInitialLanguage())

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  const value = useMemo<LanguageContextValue>(() => {
    const setLanguage = (lang: Language) => {
      setLanguageState(lang)
    }
    return { language, setLanguage, t: CONTENT[language] }
  }, [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

