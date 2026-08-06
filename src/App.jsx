import { useEffect, useState } from 'react'
import './App.css'
import { ORDER_OPTIONS, SOCIALS, TRANSLATIONS } from './data/content'
import LanguageSwitcher from './components/LanguageSwitcher'
import OrderOptionRow from './components/OrderOptionRow'

export default function App() {
  const [lang, setLang] = useState('uz')
  const t = TRANSLATIONS[lang]

  // Skrin-riderlar uchun sahifa tilini yangilab turish
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <div className="page">
      {/* Background Naqshlar */}
      <img src="/patterns/left_bg.svg" alt="" className="bg-pattern bg-pattern--left" />
      <img src="/patterns/right_bg.svg" alt="" className="bg-pattern bg-pattern--right" />

      <header className="nav">
        <div className="nav__inner">
          <a href="/" className="brand" aria-label="EVOS bosh sahifasi">
            <img src="/patterns/EVOSLogo.svg" alt="EVOS" className="brand__logo" />
          </a>
          <LanguageSwitcher lang={lang} onChange={setLang} />
        </div>
      </header>

      <main className="content">
        <h1 className="title">{t.title}</h1>
        <p className="subtitle">{t.subtitle}</p>

        <ul className="options">
          {ORDER_OPTIONS.map((option) => (
            <OrderOptionRow key={option.id} option={option} text={t.options[option.id]} />
          ))}
        </ul>

        <p className="social-label">{t.socialLabel}</p>

        <ul className="socials">
          {SOCIALS.map((s) => (
            <li key={s.id}>
              <a
                className="socials__link"
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
              >
                <img src={s.icon} alt="" className="socials__img" />
              </a>
            </li>
          ))}
        </ul>

        <p className="footer">{t.footer}</p>
      </main>
    </div>
  )
}
