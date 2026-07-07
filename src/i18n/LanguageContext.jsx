import { createContext, useContext, useState, useCallback } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('zh')

  const t = translations[locale]
  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === 'zh' ? 'en' : 'zh'))
  }, [])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
