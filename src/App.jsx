// import { useState } from 'react'
// import './App.css'

// const LANGUAGES = [
//   { code: 'uz', label: "O'zbek tili", flag: '/patterns/uz.png' },
//   { code: 'ru', label: 'Русский', flag: '/patterns/rus.png' },
//   { code: 'en', label: 'English', flag: '/patterns/eng.png' },
// ]

// const TRANSLATIONS = {
//   uz: {
//     title: 'Buyurtma bering',
//     subtitle: 'Qulay usulni tanlang',
//     socialLabel: "Ijtimoiy tarmoqlarimizga obuna bo'ling:",
//     footer: '© EVOS Uzbekistan · zakaz.evos.uz',
//     options: {
//       telegram: { title: 'Telegram Bot orqali', subtitle: '@evosdeliverybot' },
//       ios: { title: 'iOS – App Store', subtitle: 'MOBIL ILOVA ORQALI' },
//       android: { title: 'Android – Google Play', subtitle: 'MOBIL ILOVA ORQALI' },
//       call: { title: "Qo'ng'iroq orqali", subtitle: '+998 (71) 203-12-12' },
//       career: { title: 'Ish qidiryapsizmi?', subtitle: "EVOS'DA ISHLASH" },
//     },
//   },
//   ru: {
//     title: 'Сделать заказ:',
//     subtitle: 'Выберите способ',
//     socialLabel: 'Подпишитесь на наши социальные сети:',
//     footer: '© EVOS Uzbekistan · zakaz.evos.uz',
//     options: {
//       telegram: { title: 'Через Telegram Bot ', subtitle: '@evosdeliverybot' },
//       ios: { title: 'iOS – App Store', subtitle: 'В приложении Evos' },
//       android: { title: 'Android – Google Play', subtitle: 'В приложении Evos' },
//       call: { title: 'По телефону', subtitle: '+998 (71) 203-12-12' },
//       career: { title: 'Ищите работу?', subtitle: 'РАБОТА В EVOS' },
//     },
//   },
//   en: {
//     title: 'Place your order:',
//     subtitle: 'Choose a method',
//     socialLabel: 'Follow us:',
//     footer: '© EVOS Uzbekistan · zakaz.evos.uz',
//     options: {
//       telegram: { title: 'Telegram Bot', subtitle: '@evosdeliverybot' },
//       ios: { title: 'iOS – App Store', subtitle: 'MOBILE APP' },
//       android: { title: 'Android – Google Play', subtitle: 'MOBILE APP' },
//       call: { title: 'Call Center', subtitle: '+998 (71) 203-12-12' },
//       career: { title: 'Looking for a job?', subtitle: 'WORK AT EVOS' },
//     },
//   },
// }

// const ORDER_OPTIONS = [
//   { id: 'telegram', icon: '/patterns/telegram.svg', href: 'https://t.me/evosdeliverybot' },
//   { id: 'ios', icon: '/patterns/ios.svg', href: '#' },
//   { id: 'android', icon: '/patterns/playmarket.svg', href: '#' },
//   { id: 'call', icon: '/patterns/tell.svg', href: 'tel:+998712031212', divideAfter: true },
//   { id: 'career', icon: '/patterns/hands.svg', href: '#' },
// ]

// // Ijtimoiy tarmoqlar uchun PNG rasmlaringiz:
// const SOCIALS = [
//   { id: 'telegram', icon: '/patterns/telegram.svg', href: 'https://t.me/evos' },
//   { id: 'instagram', icon: '/patterns/instagram.svg', href: 'https://instagram.com/evos' },
//   { id: 'earth', icon: '/patterns/earth.svg', href: 'https://tiktok.com/@evos' },
//   { id: 'youtube', icon: '/patterns/yutube.svg', href: 'https://youtube.com/@evos' },
//   { id: 'facebook', icon: '/patterns/facebook.svg', href: 'https://facebook.com/evos' },
// ]

// function SpriteIcon({ name, className }) {
//   return (
//     <svg className={className} aria-hidden="true">
//       <use href={`/icons.svg#${name}`} />
//     </svg>
//   )
// }

// function LanguageSwitcher({ lang, onChange }) {
//   const [open, setOpen] = useState(false)
//   const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0]

//   return (
//     <div className="lang">
//       <button
//         type="button"
//         className={`lang__trigger ${open ? 'lang__trigger--open' : ''}`}
//         onClick={() => setOpen((v) => !v)}
//         aria-expanded={open}
//         aria-haspopup="listbox"
//       >
//         <img className="lang__flag" src={current.flag} alt="" />
//         <span className="lang__label">{current.label}</span>
//         <SpriteIcon
//           name="chevron-down"
//           className={`lang__chevron ${open ? 'lang__chevron--rotated' : ''}`}
//         />
//       </button>

//       {open && (
//         <ul className="lang__menu" role="listbox">
//           {LANGUAGES.filter((l) => l.code !== current.code).map((l) => (
//             <li key={l.code}>
//               <button
//                 type="button"
//                 className="lang__option"
//                 role="option"
//                 aria-selected="false"
//                 onClick={() => {
//                   onChange(l.code)
//                   setOpen(false)
//                 }}
//               >
//                 <img className="lang__flag" src={l.flag} alt="" />
//                 <span className="lang__label">{l.label}</span>
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

// function OrderOptionRow({ option, text }) {
//   return (
//     <li>
//       <a className="option" href={option.href}>
//         <span className="option__icon-wrap">
//           <img className="option__icon" src={option.icon} alt="" />
//         </span>
//         <span className="option__text">
//           <span className="option__title">{text.title}</span>
//           <span className="option__subtitle">{text.subtitle}</span>
//         </span>
//         <SpriteIcon name="chevron-right" className="option__chevron" />
//       </a>
//       {option.divideAfter && <div className="option-divider" role="separator" />}
//     </li>
//   )
// }

// export default function App() {
//   const [lang, setLang] = useState('uz')
//   const t = TRANSLATIONS[lang]

//   return (
//     <div className="page">
//       <header className="nav">
//         <div className="nav__inner">
//           <a href="/" className="brand" aria-label="EVOS bosh sahifasi">
//             <img src="/patterns/EVOSLogo.png" alt="EVOS" className="brand__logo" />
//           </a>
//           <LanguageSwitcher lang={lang} onChange={setLang} />
//         </div>
//       </header>

//       <main className="content">
//         <h1 className="title">{t.title}</h1>
//         <p className="subtitle">{t.subtitle}</p>

//         <ul className="options">
//           {ORDER_OPTIONS.map((option) => (
//             <OrderOptionRow key={option.id} option={option} text={t.options[option.id]} />
//           ))}
//         </ul>

//         <p className="social-label">{t.socialLabel}</p>

//         <ul className="socials">
//           {SOCIALS.map((s) => (
//             <li key={s.id}>
//               <a
//                 className="socials__link"
//                 href={s.href}
//                 target="_blank"
//                 rel="noreferrer"
//                 aria-label={s.id}
//               >
//                 <img src={s.icon} alt={s.id} className="socials__img" />
//               </a>
//             </li>
//           ))}
//         </ul>

//         <p className="footer">{t.footer}</p>
//       </main>
//     </div>
//   )
// }





import { useState } from 'react'
import './App.css'

const LANGUAGES = [
  { code: 'uz', label: "O'zbek tili", flag: '/patterns/uz.svg' },
  { code: 'ru', label: 'Русский', flag: '/patterns/ru.svg' },
  { code: 'en', label: 'English', flag: '/patterns/eng.svg' },
]

const TRANSLATIONS = {
  uz: {
    title: 'Buyurtma bering',
    subtitle: 'Qulay usulni tanlang',
    socialLabel: "Ijtimoiy tarmoqlarimizga obuna bo'ling:",
    footer: '© EVOS Uzbekistan · zakaz.evos.uz',
    options: {
      telegram: { title: 'Telegram Bot orqali', subtitle: '@evosdeliverybot' },
      ios: { title: 'iOS – App Store', subtitle: 'MOBIL ILOVA ORQALI' },
      android: { title: 'Android – Google Play', subtitle: 'MOBIL ILOVA ORQALI' },
      call: { title: "Qo'ng'iroq orqali", subtitle: '+998 (71) 203-12-12' },
      career: { title: 'Ish qidiryapsizmi?', subtitle: "EVOS'DA ISHLASH" },
    },
  },
  ru: {
    title: 'Сделать заказ:',
    subtitle: 'Выберите способ',
    socialLabel: 'Подпишитесь на наши социальные сети:',
    footer: '© EVOS Uzbekistan · zakaz.evos.uz',
    options: {
      telegram: { title: 'Через Telegram Bot ', subtitle: '@evosdeliverybot' },
      ios: { title: 'iOS – App Store', subtitle: 'В приложении Evos' },
      android: { title: 'Android – Google Play', subtitle: 'В приложении Evos' },
      call: { title: 'По телефону', subtitle: '+998 (71) 203-12-12' },
      career: { title: 'Ищите работу?', subtitle: 'РАБОТА В EVOS' },
    },
  },
  en: {
    title: 'Place your order:',
    subtitle: 'Choose a method',
    socialLabel: 'Follow us:',
    footer: '© EVOS Uzbekistan · zakaz.evos.uz',
    options: {
      telegram: { title: 'Telegram Bot', subtitle: '@evosdeliverybot' },
      ios: { title: 'iOS – App Store', subtitle: 'MOBILE APP' },
      android: { title: 'Android – Google Play', subtitle: 'MOBILE APP' },
      call: { title: 'Call Center', subtitle: '+998 (71) 203-12-12' },
      career: { title: 'Looking for a job?', subtitle: 'WORK AT EVOS' },
    },
  },
}

const ORDER_OPTIONS = [
  { id: 'telegram', icon: '/patterns/telegram.svg', href: 'https://t.me/evosdeliverybot' },
  { id: 'ios', icon: '/patterns/ios.svg', href: 'https://apps.apple.com/uz/app/evos-uz/id1595897228' },
  { id: 'android', icon: '/patterns/playmarket.svg', href: 'https://play.google.com/store/apps/details?id=uz.makfood.service.evos' },
  { id: 'call', icon: '/patterns/tell.svg', href: 'tel:+998712031212', divideAfter: true },
  { id: 'career', icon: '/patterns/hands.svg', href: '#' },
]

const SOCIALS = [
  { id: 'telegram', icon: '/patterns/telegram.svg', href: 'https://t.me/evosuzbekistan' },
  { id: 'instagram', icon: '/patterns/instagram.svg', href: 'https://www.instagram.com/evosuzbekistan?igsh=enBvNjZhcDBneHVo' },
  { id: 'earth', icon: '/patterns/earth.svg', href: '#' },
  { id: 'youtube', icon: '/patterns/yutube.svg', href: 'https://www.youtube.com/@evos-official' },
  { id: 'facebook', icon: '/patterns/facebook.svg', href: 'https://www.facebook.com/evosuzbekistan/?locale=ru_RU' },
]

function SpriteIcon({ name, className }) {
  return (
    <svg className={className} aria-hidden="true">
      <use href={`/icons.svg#${name}`} />
    </svg>
  )
}

function LanguageSwitcher({ lang, onChange }) {
  const [open, setOpen] = useState(false)
  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0]

  return (
    <div className="lang">
      <button
        type="button"
        className={`lang__trigger ${open ? 'lang__trigger--open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <img className="lang__flag" src={current.flag} alt="" />
        <span className="lang__label">{current.label}</span>
        <SpriteIcon
          name="chevron-down"
          className={`lang__chevron ${open ? 'lang__chevron--rotated' : ''}`}
        />
      </button>

      {open && (
        <ul className="lang__menu" role="listbox">
          {LANGUAGES.filter((l) => l.code !== current.code).map((l) => (
            <li key={l.code}>
              <button
                type="button"
                className="lang__option"
                role="option"
                aria-selected="false"
                onClick={() => {
                  onChange(l.code)
                  setOpen(false)
                }}
              >
                <img className="lang__flag" src={l.flag} alt="" />
                <span className="lang__label">{l.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function OrderOptionRow({ option, text }) {
  return (
    <li>
      <a className="option" href={option.href}>
        <span className="option__icon-wrap">
          <img
            className={`option__icon ${option.id === 'career' ? 'option__icon--career' : ''}`}
            src={option.icon}
            alt=""
          />
        </span>
        <span className="option__text">
          <span className="option__title">{text.title}</span>
          <span className="option__subtitle">{text.subtitle}</span>
        </span>
        <SpriteIcon name="chevron-right" className="option__chevron" />
      </a>
      {option.divideAfter && <div className="option-divider" role="separator" />}
    </li>
  )
}

export default function App() {
  const [lang, setLang] = useState('uz')
  const t = TRANSLATIONS[lang]

  return (
    <div className="page">
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
                rel="noreferrer"
                aria-label={s.id}
              >
                <img src={s.icon} alt={s.id} className="socials__img" />
              </a>
            </li>
          ))}
        </ul>

        <p className="footer">{t.footer}</p>
      </main>
    </div>
  )
}