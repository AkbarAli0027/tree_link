import { useState } from 'react'

import { TRANSLATIONS } from './data/content'

import SiteHeader from './components/SiteHeader'
import BackgroundPatterns from './components/BackgroundPatterns'
import PeopleDecor from './components/PeopleDecor'
import SocialsPage from './components/SocialsPage'

// Asosiy saytga qaytish uchun to'liq URL.
// Lokal test uchun VITE_MAIN_APP_URL ni .env faylida bering,
// masalan: VITE_MAIN_APP_URL=https://evos.uz
const MAIN_APP_URL = import.meta.env.VITE_MAIN_APP_URL || '/'

export default function SocialApp() {
  const [lang, setLang] = useState('uz')
  const t = TRANSLATIONS[lang]

  function goHome() {
    window.location.href = MAIN_APP_URL
  }

  return (
    <div className="page">

      <BackgroundPatterns />

      <SiteHeader lang={lang} onLangChange={setLang} onLogoClick={goHome} />

      <SocialsPage
        t={t}
        onBack={goHome}
      />

      <PeopleDecor />

    </div>
  )
}