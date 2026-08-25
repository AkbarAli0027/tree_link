// import { useEffect, useRef } from 'react'
// import PropTypes from 'prop-types'
// import { SOCIALS } from '../data/content'
// import SpriteIcon from './SpriteIcon'

// export default function SocialsPage({ t, onBack }) {
//   const titleRef = useRef(null)

//   // Sahifa ochilganda scrollni tepaga olib chiqish va fokusni sarlavhaga o'tkazish
//   useEffect(() => {
//     window.scrollTo(0, 0)
//     titleRef.current?.focus()
//   }, [])

//   return (
//     <div className="socials-page">
//       <h1 ref={titleRef} tabIndex={-1} className="title socials-page__title">{t.socialsTitle}</h1>
//       <p className="subtitle socials-page__subtitle">{t.socialsSubtitle}</p>

//       <ul className="socials-list">
//         {SOCIALS.map((s) => (
//           <li key={s.id}>
//             <a
//               className="socials-row"
//               href={s.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label={s.label}
//             >
//               <span className="socials-row__icon-wrap">
//                 <img src={s.icon} alt="" className="socials-row__icon" />
//               </span>
//               <span className="socials-row__text">
//                 <span className="socials-row__name">{s.label}</span>
//                 <span className="socials-row__subtitle">{s.subtitle}</span>
//               </span>
//               <SpriteIcon name="chevron-right" className="socials-row__chevron" />
//             </a>
//           </li>
//         ))}
//       </ul>

//       <button type="button" className="socials-page__back" onClick={onBack}>
//         <SpriteIcon name="chevron-left" className="socials-page__back-icon" />
//         {t.back}
//       </button>
//     </div>
//   )
// }

// SocialsPage.propTypes = {
//   t: PropTypes.object.isRequired,
//   onBack: PropTypes.func.isRequired,
// }





import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { SOCIALS } from '../data/content'
import SpriteIcon from './SpriteIcon'
import LanguageSwitcher from './LanguageSwitcher'

export default function SocialsPage({ t, lang, onChangeLang, onBack }) {
  const titleRef = useRef(null)

  // Sahifa ochilganda scrollni tepaga olib chiqish va fokusni sarlavhaga o'tkazish
  useEffect(() => {
    window.scrollTo(0, 0)
    titleRef.current?.focus()
  }, [])

  return (
    <div className="socials-page-wrap">

      {/* =========================
          SOCIALS PAGE BACKGROUND PATTERNS
      ========================= */}

      <img
        src="/patterns/left_bgp.svg"
        alt=""
        className="socials-bg-pattern socials-bg-pattern--left"
      />

      <img
        src="/patterns/right_bgp.svg"
        alt=""
        className="socials-bg-pattern socials-bg-pattern--right"
      />

      {/* =========================
          HEADER
      ========================= */}

      <header className="nav">
        <div className="nav__inner">

          <a
            href="/"
            className="brand"
            aria-label="EVOS bosh sahifasi"
            onClick={(event) => {
              event.preventDefault()
              onBack()
            }}
          >
            <img
              src="/patterns/EVOS.svg"
              alt="EVOS"
              className="brand__logo"
            />
          </a>

          <LanguageSwitcher
            lang={lang}
            onChange={onChangeLang}
          />

        </div>
      </header>

      {/* =========================
          MAIN CONTENT
      ========================= */}

      <main className="socials-page">

        <h1
          ref={titleRef}
          tabIndex={-1}
          className="title socials-page__title"
        >
          {t.socialsTitle}
        </h1>

        <p className="subtitle socials-page__subtitle">
          {t.socialsSubtitle}
        </p>

        <ul className="socials-list">
          {SOCIALS.map((s) => (
            <li key={s.id}>
              <a
                className="socials-row"
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
              >
                <span className="socials-row__icon-wrap">
                  <img src={s.icon} alt="" className="socials-row__icon" />
                </span>
                <span className="socials-row__text">
                  <span className="socials-row__name">{s.label}</span>
                  <span className="socials-row__subtitle">{s.subtitle}</span>
                </span>
                <SpriteIcon name="chevron-right" className="socials-row__chevron" />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="socials-page__back"
          onClick={onBack}
        >
          <SpriteIcon name="chevron-left" className="socials-page__back-icon" />
          {t.back}
        </button>

        <p className="footer socials-page__footer">
          {t.footer}
        </p>

      </main>

    </div>
  )
}

SocialsPage.propTypes = {
  t: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
  onChangeLang: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
}