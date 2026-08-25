// // // // import { useEffect, useState } from 'react'
// // // // import './App.css'
// // // // import { ORDER_OPTIONS, SOCIALS, TRANSLATIONS } from './data/content'
// // // // import LanguageSwitcher from './components/LanguageSwitcher'
// // // // import OrderOptionRow from './components/OrderOptionRow'
// // // // import SocialsPage from './components/SocialsPage'

// // // // function viewFromHash() {
// // // //   return window.location.hash === '#socials' ? 'socials' : 'home'
// // // // }

// // // // export default function App() {
// // // //   const [lang, setLang] = useState('uz')
// // // //   const [view, setView] = useState(viewFromHash)
// // // //   const t = TRANSLATIONS[lang]

// // // //   // Skrin-riderlar uchun sahifa tilini yangilab turish
// // // //   useEffect(() => {
// // // //     document.documentElement.lang = lang
// // // //   }, [lang])

// // // //   // Hash asosidagi navigatsiya: orqaga tugmasi ishlashi uchun
// // // //   useEffect(() => {
// // // //     function onHashChange() {
// // // //       setView(viewFromHash())
// // // //     }
// // // //     window.addEventListener('hashchange', onHashChange)
// // // //     return () => window.removeEventListener('hashchange', onHashChange)
// // // //   }, [])

// // // //   function goToSocials() {
// // // //     window.location.hash = 'socials'
// // // //   }

// // // //   function goHome() {
// // // //     if (window.location.hash === '#socials') {
// // // //       window.history.back()
// // // //     } else {
// // // //       setView('home')
// // // //     }
// // // //   }

// // // //   return (
// // // //     <div className="page">
// // // //       {/* Background Naqshlar */}
// // // //       <img src="/patterns/left_bg.svg" alt="" className="bg-pattern bg-pattern--left" />
// // // //       <img src="/patterns/right_bg.svg" alt="" className="bg-pattern bg-pattern--right" />

// // // //       <header className="nav">
// // // //         <div className="nav__inner">
// // // //           <a
// // // //             href="/"
// // // //             className="brand"
// // // //             aria-label="EVOS bosh sahifasi"
// // // //             onClick={(event) => {
// // // //               if (window.location.hash === '#socials') {
// // // //                 event.preventDefault()
// // // //                 goHome()
// // // //               }
// // // //             }}
// // // //           >
// // // //             <img src="/patterns/EVOSLogo.svg" alt="EVOS" className="brand__logo" />
// // // //           </a>
// // // //           <LanguageSwitcher lang={lang} onChange={setLang} />
// // // //         </div>
// // // //       </header>

// // // //       <main className="content">
// // // //         {view === 'socials' ? (
// // // //           <>
// // // //             <SocialsPage t={t} onBack={goHome} />
// // // //             <p className="footer">{t.footer}</p>
// // // //           </>
// // // //         ) : (
// // // //           <>
// // // //             <h1 className="title">{t.title}</h1>
// // // //             <p className="subtitle">{t.subtitle}</p>

// // // //             <ul className="options">
// // // //               {ORDER_OPTIONS.map((option) => (
// // // //                 <OrderOptionRow key={option.id} option={option} text={t.options[option.id]} />
// // // //               ))}
// // // //             </ul>

// // // //             <div className="social-label-row">
// // // //               <p className="social-label">
// // // //                 <span className="social-label__full">{t.socialLabel}</span>
// // // //                 <span className="social-label__short">{t.socialLabelShort}</span>
// // // //               </p>
// // // //               <button
// // // //                 type="button"
// // // //                 className="social-view-all"
// // // //                 onClick={goToSocials}
// // // //               >
// // // //                 {t.viewAll}
// // // //               </button>
// // // //             </div>

// // // //             <ul className="socials">
// // // //               {SOCIALS.map((s) => (
// // // //                 <li key={s.id}>
// // // //                   <a
// // // //                     className="socials__link"
// // // //                     href={s.href}
// // // //                     target="_blank"
// // // //                     rel="noopener noreferrer"
// // // //                     aria-label={s.label}
// // // //                   >
// // // //                     <img src={s.icon} alt="" className="socials__img" />
// // // //                   </a>
// // // //                 </li>
// // // //               ))}
// // // //             </ul>

// // // //             <p className="footer">{t.footer}</p>
// // // //           </>
// // // //         )}
// // // //       </main>

// // // //       {/* Odamlar (sahifa eng pastida, yonma-yon) */}
// // // //       <div className="people">
// // // //         <img src="/patterns/men.svg" alt="" className="person person--men" />
// // // //         <img src="/patterns/girl.svg" alt="" className="person person--girl" />
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }





// // // import { useEffect, useState } from 'react'
// // // import './App.css'
// // // import { ORDER_OPTIONS, SOCIALS, TRANSLATIONS } from './data/content'
// // // import LanguageSwitcher from './components/LanguageSwitcher'
// // // import OrderOptionRow from './components/OrderOptionRow'
// // // import SocialsPage from './components/SocialsPage'

// // // function viewFromHash() {
// // //   return window.location.hash === '#socials' ? 'socials' : 'home'
// // // }

// // // export default function App() {
// // //   const [lang, setLang] = useState('uz')
// // //   const [view, setView] = useState(viewFromHash)
// // //   const t = TRANSLATIONS[lang]

// // //   // Skrin-riderlar uchun sahifa tilini yangilab turish
// // //   useEffect(() => {
// // //     document.documentElement.lang = lang
// // //   }, [lang])

// // //   // Hash asosidagi navigatsiya: orqaga tugmasi ishlashi uchun
// // //   useEffect(() => {
// // //     function onHashChange() {
// // //       setView(viewFromHash())
// // //     }
// // //     window.addEventListener('hashchange', onHashChange)
// // //     return () => window.removeEventListener('hashchange', onHashChange)
// // //   }, [])

// // //   function goToSocials() {
// // //     window.location.hash = 'socials'
// // //   }

// // //   function goHome() {
// // //     if (window.location.hash === '#socials') {
// // //       window.history.back()
// // //     } else {
// // //       setView('home')
// // //     }
// // //   }

// // //   return (
// // //     <div className="page">
// // //       {/* Background Naqshlar: tepa va past, tagma-tag */}
// // //       <img src="/patterns/mb_bg_top.svg" alt="" className="bg-pattern bg-pattern--top" />
// // //       <img src="/patterns/mb_bg_bottom.svg" alt="" className="bg-pattern bg-pattern--bottom" />

// // //       <header className="nav">
// // //         <div className="nav__inner">
// // //           <a
// // //             href="/"
// // //             className="brand"
// // //             aria-label="EVOS bosh sahifasi"
// // //             onClick={(event) => {
// // //               if (window.location.hash === '#socials') {
// // //                 event.preventDefault()
// // //                 goHome()
// // //               }
// // //             }}
// // //           >
// // //             <img src="/patterns/EVOSLogo.svg" alt="EVOS" className="brand__logo" />
// // //           </a>
// // //           <LanguageSwitcher lang={lang} onChange={setLang} />
// // //         </div>
// // //       </header>

// // //       <main className="content">
// // //         {view === 'socials' ? (
// // //           <>
// // //             <SocialsPage t={t} onBack={goHome} />
// // //             <p className="footer">{t.footer}</p>
// // //           </>
// // //         ) : (
// // //           <>
// // //             <h1 className="title">{t.title}</h1>
// // //             <p className="subtitle">{t.subtitle}</p>

// // //             <ul className="options">
// // //               {ORDER_OPTIONS.map((option) => (
// // //                 <OrderOptionRow key={option.id} option={option} text={t.options[option.id]} />
// // //               ))}
// // //             </ul>

// // //             <div className="social-label-row">
// // //               <p className="social-label">
// // //                 <span className="social-label__full">{t.socialLabel}</span>
// // //                 <span className="social-label__short">{t.socialLabelShort}</span>
// // //               </p>
// // //               <button
// // //                 type="button"
// // //                 className="social-view-all"
// // //                 onClick={goToSocials}
// // //               >
// // //                 {t.viewAll}
// // //               </button>
// // //             </div>

// // //             <ul className="socials">
// // //               {SOCIALS.map((s) => (
// // //                 <li key={s.id}>
// // //                   <a
// // //                     className="socials__link"
// // //                     href={s.href}
// // //                     target="_blank"
// // //                     rel="noopener noreferrer"
// // //                     aria-label={s.label}
// // //                   >
// // //                     <img src={s.icon} alt="" className="socials__img" />
// // //                   </a>
// // //                 </li>
// // //               ))}
// // //             </ul>

// // //             <p className="footer">{t.footer}</p>
// // //           </>
// // //         )}
// // //       </main>

// // //       {/* Odamlar (sahifa eng pastida, yonma-yon, bir-biriga ozgina yopishgan) */}
// // //       <div className="people">
// // //         <img src="/patterns/men.svg" alt="" className="person person--men" />
// // //         <img src="/patterns/girl.svg" alt="" className="person person--girl" />
// // //       </div>
// // //     </div>
// // //   )
// // // }




// // import { useEffect, useState } from 'react'
// // import './App.css'
// // import { ORDER_OPTIONS, SOCIALS, TRANSLATIONS } from './data/content'
// // import LanguageSwitcher from './components/LanguageSwitcher'
// // import OrderOptionRow from './components/OrderOptionRow'
// // import SocialsPage from './components/SocialsPage'

// // function viewFromHash() {
// //   return window.location.hash === '#socials' ? 'socials' : 'home'
// // }

// // export default function App() {
// //   const [lang, setLang] = useState('uz')
// //   const [view, setView] = useState(viewFromHash)
// //   const t = TRANSLATIONS[lang]

// //   // Skrin-riderlar uchun sahifa tilini yangilab turish
// //   useEffect(() => {
// //     document.documentElement.lang = lang
// //   }, [lang])

// //   // Hash asosidagi navigatsiya: orqaga tugmasi ishlashi uchun
// //   useEffect(() => {
// //     function onHashChange() {
// //       setView(viewFromHash())
// //     }
// //     window.addEventListener('hashchange', onHashChange)
// //     return () => window.removeEventListener('hashchange', onHashChange)
// //   }, [])

// //   function goToSocials() {
// //     window.location.hash = 'socials'
// //   }

// //   function goHome() {
// //     if (window.location.hash === '#socials') {
// //       window.history.back()
// //     } else {
// //       setView('home')
// //     }
// //   }

// //   return (
// //     <div className="page">
// //       {/* Background Naqshlar — DESKTOP: katta ekranlarda ko'rinadi (>600px) */}
// //       <img
// //         src="/patterns/left_bg.svg"
// //         alt=""
// //         className="bg-pattern bg-pattern--desktop bg-pattern--desktop-left"
// //       />
// //       <img
// //         src="/patterns/right_bg.svg"
// //         alt=""
// //         className="bg-pattern bg-pattern--desktop bg-pattern--desktop-right"
// //       />

// //       {/* Background Naqshlar — MOBILE: kichik ekranlarda ko'rinadi (<=600px), tepa/past tagma-tag */}
// //       <img
// //         src="/patterns/mb_bg_top.svg"
// //         alt=""
// //         className="bg-pattern bg-pattern--mobile bg-pattern--mobile-top"
// //       />
// //       <img
// //         src="/patterns/mb_bg_bottom.svg"
// //         alt=""
// //         className="bg-pattern bg-pattern--mobile bg-pattern--mobile-bottom"
// //       />

// //       <header className="nav">
// //         <div className="nav__inner">
// //           <a
// //             href="/"
// //             className="brand"
// //             aria-label="EVOS bosh sahifasi"
// //             onClick={(event) => {
// //               if (window.location.hash === '#socials') {
// //                 event.preventDefault()
// //                 goHome()
// //               }
// //             }}
// //           >
// //             <img src="/patterns/EVOSLogo.svg" alt="EVOS" className="brand__logo" />
// //           </a>
// //           <LanguageSwitcher lang={lang} onChange={setLang} />
// //         </div>
// //       </header>

// //       <main className="content">
// //         {view === 'socials' ? (
// //           <>
// //             <SocialsPage t={t} onBack={goHome} />
// //             <p className="footer">{t.footer}</p>
// //           </>
// //         ) : (
// //           <>
// //             <h1 className="title">{t.title}</h1>
// //             <p className="subtitle">{t.subtitle}</p>

// //             <ul className="options">
// //               {ORDER_OPTIONS.map((option) => (
// //                 <OrderOptionRow key={option.id} option={option} text={t.options[option.id]} />
// //               ))}
// //             </ul>

// //             <div className="social-label-row">
// //               <p className="social-label">
// //                 <span className="social-label__full">{t.socialLabel}</span>
// //                 <span className="social-label__short">{t.socialLabelShort}</span>
// //               </p>
// //               <button
// //                 type="button"
// //                 className="social-view-all"
// //                 onClick={goToSocials}
// //               >
// //                 {t.viewAll}
// //               </button>
// //             </div>

// //             <ul className="socials">
// //               {SOCIALS.map((s) => (
// //                 <li key={s.id}>
// //                   <a
// //                     className="socials__link"
// //                     href={s.href}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     aria-label={s.label}
// //                   >
// //                     <img src={s.icon} alt="" className="socials__img" />
// //                   </a>
// //                 </li>
// //               ))}
// //             </ul>

// //             <p className="footer">{t.footer}</p>
// //           </>
// //         )}
// //       </main>

// //       {/* Odamlar (sahifa eng pastida, yonma-yon, bir-biriga ozgina yopishgan) */}
// //       <div className="people">
// //         <img src="/patterns/men.svg" alt="" className="person person--men" />
// //         <img src="/patterns/girl.svg" alt="" className="person person--girl" />
// //       </div>
// //     </div>
// //   )
// // }




















// // import { useEffect, useState } from 'react'
// // import './App.css'
// // import { ORDER_OPTIONS, SOCIALS, TRANSLATIONS } from './data/content'
// // import LanguageSwitcher from './components/LanguageSwitcher'
// // import OrderOptionRow from './components/OrderOptionRow'
// // import SocialsPage from './components/SocialsPage'

// // function viewFromHash() {
// //   return window.location.hash === '#socials' ? 'socials' : 'home'
// // }

// // export default function App() {
// //   const [lang, setLang] = useState('uz')
// //   const [view, setView] = useState(viewFromHash)
// //   const t = TRANSLATIONS[lang]

// //   // Skrin-riderlar uchun sahifa tilini yangilab turish
// //   useEffect(() => {
// //     document.documentElement.lang = lang
// //   }, [lang])

// //   // Hash asosidagi navigatsiya: orqaga tugmasi ishlashi uchun
// //   useEffect(() => {
// //     function onHashChange() {
// //       setView(viewFromHash())
// //     }
// //     window.addEventListener('hashchange', onHashChange)
// //     return () => window.removeEventListener('hashchange', onHashChange)
// //   }, [])

// //   function goToSocials() {
// //     window.location.hash = 'socials'
// //   }

// //   function goHome() {
// //     if (window.location.hash === '#socials') {
// //       window.history.back()
// //     } else {
// //       setView('home')
// //     }
// //   }

// //   return (
// //     <div className="page">
// //       {/* Background Naqshlar — DESKTOP: katta ekranlarda ko'rinadi (>600px) */}
// //       <img
// //         src="/patterns/left_bg.svg"
// //         alt=""
// //         className="bg-pattern bg-pattern--desktop bg-pattern--desktop-left"
// //       />
// //       <img
// //         src="/patterns/right_bg.svg"
// //         alt=""
// //         className="bg-pattern bg-pattern--desktop bg-pattern--desktop-right"
// //       />

// //       {/* Background Naqshlar — MOBILE: kichik ekranlarda ko'rinadi (<=600px), tepa/past tagma-tag */}
// //       <img
// //         src="/patterns/mb_bg_top.svg"
// //         alt=""
// //         className="bg-pattern bg-pattern--mobile bg-pattern--mobile-top"
// //       />
// //       <img
// //         src="/patterns/mb_bg_bottom.svg"
// //         alt=""
// //         className="bg-pattern bg-pattern--mobile bg-pattern--mobile-bottom"
// //       />

// //       <header className="nav">
// //         <div className="nav__inner">
// //           <a
// //             href="/"
// //             className="brand"
// //             aria-label="EVOS bosh sahifasi"
// //             onClick={(event) => {
// //               if (window.location.hash === '#socials') {
// //                 event.preventDefault()
// //                 goHome()
// //               }
// //             }}
// //           >
// //             <img src="/patterns/EVOSLogo.svg" alt="EVOS" className="brand__logo" />
// //           </a>
// //           <LanguageSwitcher lang={lang} onChange={setLang} />
// //         </div>
// //       </header>

// //       <main className="content">
// //         {view === 'socials' ? (
// //           <>
// //             <SocialsPage t={t} onBack={goHome} />
// //             <p className="footer">{t.footer}</p>
// //           </>
// //         ) : (
// //           <>
// //             <h1 className="title">{t.title}</h1>
// //             <p className="subtitle">{t.subtitle}</p>

// //             <ul className="options">
// //               {ORDER_OPTIONS.map((option) => (
// //                 <OrderOptionRow key={option.id} option={option} text={t.options[option.id]} />
// //               ))}
// //             </ul>

// //             <div className="social-label-row">
// //               <p className="social-label">
// //                 <span className="social-label__full">{t.socialLabel}</span>
// //                 <span className="social-label__short">{t.socialLabelShort}</span>
// //               </p>
// //               <button
// //                 type="button"
// //                 className="social-view-all"
// //                 onClick={goToSocials}
// //               >
// //                 {t.viewAll}
// //               </button>
// //             </div>

// //             <ul className="socials">
// //               {SOCIALS.map((s) => (
// //                 <li key={s.id}>
// //                   <a
// //                     className="socials__link"
// //                     href={s.href}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     aria-label={s.label}
// //                   >
// //                     <img src={s.icon} alt="" className="socials__img" />
// //                   </a>
// //                 </li>
// //               ))}
// //             </ul>

// //             <p className="footer">{t.footer}</p>
// //           </>
// //         )}
// //       </main>

// //       {/* Odamlar (sahifa eng pastida, yonma-yon, bir-biriga ozgina yopishgan) */}
// //       <div className="people">
// //         <img src="/patterns/men.svg" alt="" className="person person--men" />
// //         <img src="/patterns/girl.svg" alt="" className="person person--girl" />
// //         <img src="/patterns/heart1.svg" alt="" className="heart-icon heart-icon--girl" />
// //       </div>
// //     </div>
// //   )
// // }











// // import { useEffect, useState } from 'react'
// // import './App.css'
// // import { ORDER_OPTIONS, SOCIALS, TRANSLATIONS } from './data/content'
// // import LanguageSwitcher from './components/LanguageSwitcher'
// // import OrderOptionRow from './components/OrderOptionRow'
// // import SocialsPage from './components/SocialsPage'

// // function viewFromHash() {
// //   return window.location.hash === '#socials' ? 'socials' : 'home'
// // }

// // export default function App() {
// //   const [lang, setLang] = useState('uz')
// //   const [view, setView] = useState(viewFromHash)
// //   const t = TRANSLATIONS[lang]

// //   useEffect(() => {
// //     document.documentElement.lang = lang
// //   }, [lang])

// //   useEffect(() => {
// //     function onHashChange() {
// //       setView(viewFromHash())
// //     }
// //     window.addEventListener('hashchange', onHashChange)
// //     return () => window.removeEventListener('hashchange', onHashChange)
// //   }, [])

// //   function goToSocials() {
// //     window.location.hash = 'socials'
// //   }

// //   function goHome() {
// //     if (window.location.hash === '#socials') {
// //       window.history.back()
// //     } else {
// //       setView('home')
// //     }
// //   }

// //   return (
// //     <div className="page">
// //       <img
// //         src="/patterns/left_bg.svg"
// //         alt=""
// //         className="bg-pattern bg-pattern--desktop bg-pattern--desktop-left"
// //       />
// //       <img
// //         src="/patterns/right_bg.svg"
// //         alt=""
// //         className="bg-pattern bg-pattern--desktop bg-pattern--desktop-right"
// //       />

// //       <img
// //         src="/patterns/mb_bg_top.svg"
// //         alt=""
// //         className="bg-pattern bg-pattern--mobile bg-pattern--mobile-top"
// //       />
// //       <img
// //         src="/patterns/mb_bg_bottom.svg"
// //         alt=""
// //         className="bg-pattern bg-pattern--mobile bg-pattern--mobile-bottom"
// //       />

// //       <header className="nav">
// //         <div className="nav__inner">
// //           <a
// //             href="/"
// //             className="brand"
// //             aria-label="EVOS bosh sahifasi"
// //             onClick={(event) => {
// //               if (window.location.hash === '#socials') {
// //                 event.preventDefault()
// //                 goHome()
// //               }
// //             }}
// //           >
// //             <img src="/patterns/EVOSLogo.svg" alt="EVOS" className="brand__logo" />
// //           </a>
// //           <LanguageSwitcher lang={lang} onChange={setLang} />
// //         </div>
// //       </header>

// //       <main className="content">
// //         {view === 'socials' ? (
// //           <>
// //             <SocialsPage t={t} onBack={goHome} />
// //             <p className="footer">{t.footer}</p>
// //           </>
// //         ) : (
// //           <>
// //             <h1 className="title">{t.title}</h1>
// //             <p className="subtitle">{t.subtitle}</p>

// //             <ul className="options">
// //               {ORDER_OPTIONS.map((option) => (
// //                 <OrderOptionRow key={option.id} option={option} text={t.options[option.id]} />
// //               ))}
// //             </ul>

// //             <div className="social-label-row">
// //               <p className="social-label">
// //                 <span className="social-label__full">{t.socialLabel}</span>
// //                 <span className="social-label__short">{t.socialLabelShort}</span>
// //               </p>
// //               <button
// //                 type="button"
// //                 className="social-view-all"
// //                 onClick={goToSocials}
// //               >
// //                 {t.viewAll}
// //               </button>
// //             </div>

// //             <ul className="socials">
// //               {SOCIALS.map((s) => (
// //                 <li key={s.id}>
// //                   <a
// //                     className="socials__link"
// //                     href={s.href}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     aria-label={s.label}
// //                   >
// //                     <img src={s.icon} alt="" className="socials__img" />
// //                   </a>
// //                 </li>
// //               ))}
// //             </ul>

// //             <p className="footer">{t.footer}</p>
// //           </>
// //         )}
// //       </main>

// //       <div className="people">
// //         <div className="person person--men" aria-hidden="true">
// //           <img src="/patterns/men.svg" alt="" className="person__img" />
// //           <img src="/patterns/heart1.svg" alt="" className="heart-icon heart-icon--men" />
// //         </div>
// //         <div className="person person--girl" aria-hidden="true">
// //           <img src="/patterns/girl.svg" alt="" className="person__img" />
// //           <img src="/patterns/heart2.svg" alt="" className="heart-icon heart-icon--girl-1" />
// //           <img src="/patterns/heart3.svg" alt="" className="heart-icon heart-icon--girl-2" />
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }









// // import { useEffect, useState } from 'react'
// // import './App.css'

// // import {
// //   ORDER_OPTIONS,
// //   SOCIALS,
// //   TRANSLATIONS,
// // } from './data/content'

// // import LanguageSwitcher from './components/LanguageSwitcher'
// // import OrderOptionRow from './components/OrderOptionRow'
// // import SocialsPage from './components/SocialsPage'

// // function viewFromHash() {
// //   return window.location.hash === '#socials'
// //     ? 'socials'
// //     : 'home'
// // }

// // export default function App() {
// //   const [lang, setLang] = useState('uz')
// //   const [view, setView] = useState(viewFromHash)

// //   const t = TRANSLATIONS[lang]

// //   useEffect(() => {
// //     document.documentElement.lang = lang
// //   }, [lang])

// //   useEffect(() => {
// //     function onHashChange() {
// //       setView(viewFromHash())
// //     }

// //     window.addEventListener(
// //       'hashchange',
// //       onHashChange
// //     )

// //     return () => {
// //       window.removeEventListener(
// //         'hashchange',
// //         onHashChange
// //       )
// //     }
// //   }, [])

// //   function goToSocials() {
// //     window.location.hash = 'socials'
// //   }

// //   function goHome() {
// //     if (window.location.hash === '#socials') {
// //       window.history.back()
// //     } else {
// //       setView('home')
// //     }
// //   }

// //   return (
// //     <div className="page">

// //       {/* =========================
// //           BACKGROUND PATTERNS
// //       ========================= */}

// //       <img
// //         src="/patterns/left_bg.svg"
// //         alt=""
// //         className="
// //           bg-pattern
// //           bg-pattern--desktop
// //           bg-pattern--desktop-left
// //         "
// //       />

// //       <img
// //         src="/patterns/right_bg.svg"
// //         alt=""
// //         className="
// //           bg-pattern
// //           bg-pattern--desktop
// //           bg-pattern--desktop-right
// //         "
// //       />

// //       <img
// //         src="/patterns/mb_bg_top.svg"
// //         alt=""
// //         className="
// //           bg-pattern
// //           bg-pattern--mobile
// //           bg-pattern--mobile-top
// //         "
// //       />

// //       <img
// //         src="/patterns/mb_bg_bottom.svg"
// //         alt=""
// //         className="
// //           bg-pattern
// //           bg-pattern--mobile
// //           bg-pattern--mobile-bottom
// //         "
// //       />

// //       {/* =========================
// //           HEADER
// //       ========================= */}

// //       <header className="nav">
// //         <div className="nav__inner">

// //           <a
// //             href="/"
// //             className="brand"
// //             aria-label="EVOS bosh sahifasi"
// //             onClick={(event) => {
// //               if (
// //                 window.location.hash ===
// //                 '#socials'
// //               ) {
// //                 event.preventDefault()
// //                 goHome()
// //               }
// //             }}
// //           >
// //             <img
// //               src="/patterns/EVOSLogo.svg"
// //               alt="EVOS"
// //               className="brand__logo"
// //             />
// //           </a>

// //           <LanguageSwitcher
// //             lang={lang}
// //             onChange={setLang}
// //           />

// //         </div>
// //       </header>

// //       {/* =========================
// //           MAIN CONTENT
// //       ========================= */}

// //       <main className="content">

// //         {view === 'socials' ? (
// //           <>
// //             <SocialsPage
// //               t={t}
// //               onBack={goHome}
// //             />

// //             <p className="footer">
// //               {t.footer}
// //             </p>
// //           </>
// //         ) : (
// //           <>
// //             <h1 className="title">
// //               {t.title}
// //             </h1>

// //             <p className="subtitle">
// //               {t.subtitle}
// //             </p>

// //             <ul className="options">
// //               {ORDER_OPTIONS.map((option) => (
// //                 <OrderOptionRow
// //                   key={option.id}
// //                   option={option}
// //                   text={t.options[option.id]}
// //                 />
// //               ))}
// //             </ul>

// //             <div className="social-label-row">

// //               <p className="social-label">

// //                 <span className="social-label__full">
// //                   {t.socialLabel}
// //                 </span>

// //                 <span className="social-label__short">
// //                   {t.socialLabelShort}
// //                 </span>

// //               </p>

// //               <button
// //                 type="button"
// //                 className="social-view-all"
// //                 onClick={goToSocials}
// //               >
// //                 {t.viewAll}
// //               </button>

// //             </div>

// //             <ul className="socials">

// //               {SOCIALS.map((social) => (
// //                 <li key={social.id}>

// //                   <a
// //                     className="socials__link"
// //                     href={social.href}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     aria-label={social.label}
// //                   >

// //                     <img
// //                       src={social.icon}
// //                       alt=""
// //                       className="socials__img"
// //                     />

// //                   </a>

// //                 </li>
// //               ))}

// //             </ul>

// //             <p className="footer">
// //               {t.footer}
// //             </p>
// //           </>
// //         )}

// //       </main>

// //       {/* =========================
// //           PEOPLE
// //           FAQAT MEN + GIRL
// //           (yuraklar rasmning ichida,
// //           alohida SVG kerak emas)
// //       ========================= */}

// //       <div className="people">

// //         {/* =====================
// //             MAN
// //         ===================== */}

// //         <div
// //           className="person person--men"
// //           aria-hidden="true"
// //         >

// //           <picture>
// //             <source
// //               media="(max-width: 600px)"
// //               srcSet="/patterns/mb_men.svg"
// //             />
// //             <img
// //               src="/patterns/men.svg"
// //               alt=""
// //               className="person__img"
// //             />
// //           </picture>

// //         </div>


// //         {/* =====================
// //             GIRL
// //         ===================== */}

// //         <div
// //           className="person person--girl"
// //           aria-hidden="true"
// //         >

// //           <picture>
// //             <source
// //               media="(max-width: 600px)"
// //               srcSet="/patterns/mb_girl.svg"
// //             />
// //             <img
// //               src="/patterns/girl.svg"
// //               alt=""
// //               className="person__img"
// //             />
// //           </picture>

// //         </div>

// //       </div>

// //     </div>
// //   )
// // }












// import { useState } from 'react'
// import './App.css'

// import {
//   ORDER_OPTIONS,
//   SOCIALS,
//   TRANSLATIONS,
// } from './data/content'

// import LanguageSwitcher from './components/LanguageSwitcher'
// import OrderOptionRow from './components/OrderOptionRow'
// import SocialsPage from './components/SocialsPage'
// import NewWindowPortal from './components/NewWindowPortal'

// export default function App() {
//   const [lang, setLang] = useState('uz')
//   const [socialsWindowOpen, setSocialsWindowOpen] = useState(false)

//   const t = TRANSLATIONS[lang]

//   function openSocialsWindow() {
//     setSocialsWindowOpen(true)
//   }

//   function closeSocialsWindow() {
//     setSocialsWindowOpen(false)
//   }

//   return (
//     <div className="page">

//       {/* =========================
//           BACKGROUND PATTERNS
//       ========================= */}

//       <img
//         src="/patterns/left_bg.svg"
//         alt=""
//         className="
//           bg-pattern
//           bg-pattern--desktop
//           bg-pattern--desktop-left
//         "
//       />

//       <img
//         src="/patterns/right_bg.svg"
//         alt=""
//         className="
//           bg-pattern
//           bg-pattern--desktop
//           bg-pattern--desktop-right
//         "
//       />

//       <img
//         src="/patterns/mb_bg_top.svg"
//         alt=""
//         className="
//           bg-pattern
//           bg-pattern--mobile
//           bg-pattern--mobile-top
//         "
//       />

//       <img
//         src="/patterns/mb_bg_bottom.svg"
//         alt=""
//         className="
//           bg-pattern
//           bg-pattern--mobile
//           bg-pattern--mobile-bottom
//         "
//       />

//       {/* =========================
//           HEADER
//       ========================= */}

//       <header className="nav">
//         <div className="nav__inner">

//           <a
//             href="/"
//             className="brand"
//             aria-label="EVOS bosh sahifasi"
//           >
//             <img
//               src="/patterns/EVOSLogo.svg"
//               alt="EVOS"
//               className="brand__logo"
//             />
//           </a>

//           <LanguageSwitcher
//             lang={lang}
//             onChange={setLang}
//           />

//         </div>
//       </header>

//       {/* =========================
//           MAIN CONTENT
//       ========================= */}

//       <main className="content">

//         <h1 className="title">
//           {t.title}
//         </h1>

//         <p className="subtitle">
//           {t.subtitle}
//         </p>

//         <ul className="options">
//           {ORDER_OPTIONS.map((option) => (
//             <OrderOptionRow
//               key={option.id}
//               option={option}
//               text={t.options[option.id]}
//             />
//           ))}
//         </ul>

//         <div className="social-label-row">

//           <p className="social-label">

//             <span className="social-label__full">
//               {t.socialLabel}
//             </span>

//             <span className="social-label__short">
//               {t.socialLabelShort}
//             </span>

//           </p>

//           <button
//             type="button"
//             className="social-view-all"
//             onClick={openSocialsWindow}
//           >
//             {t.viewAll}
//           </button>

//         </div>

//         <ul className="socials">

//           {SOCIALS.map((social) => (
//             <li key={social.id}>

//               <a
//                 className="socials__link"
//                 href={social.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={social.label}
//               >

//                 <img
//                   src={social.icon}
//                   alt=""
//                   className="socials__img"
//                 />

//               </a>

//             </li>
//           ))}

//         </ul>

//         <p className="footer">
//           {t.footer}
//         </p>

//       </main>

//       {/* =========================
//           PEOPLE
//           FAQAT MEN + GIRL
//           (yuraklar rasmning ichida,
//           alohida SVG kerak emas)
//       ========================= */}

//       <div className="people">

//         {/* =====================
//             MAN
//         ===================== */}

//         <div
//           className="person person--men"
//           aria-hidden="true"
//         >

//           <picture>
//             <source
//               media="(max-width: 600px)"
//               srcSet="/patterns/mb_men.svg"
//             />
//             <img
//               src="/patterns/men.svg"
//               alt=""
//               className="person__img"
//             />
//           </picture>

//         </div>


//         {/* =====================
//             GIRL
//         ===================== */}

//         <div
//           className="person person--girl"
//           aria-hidden="true"
//         >

//           <picture>
//             <source
//               media="(max-width: 600px)"
//               srcSet="/patterns/mb_girl.svg"
//             />
//             <img
//               src="/patterns/girl.svg"
//               alt=""
//               className="person__img"
//             />
//           </picture>

//         </div>

//       </div>

//       {/* =========================
//           SOCIALS — ALOHIDA OYNA
//           (window.open orqali,
//           hash yoki route emas)
//       ========================= */}

//       {socialsWindowOpen && (
//         <NewWindowPortal
//           title={t.socialsTitle}
//           features="width=480,height=800"
//           onClose={closeSocialsWindow}
//         >
//           <div className="page page--popup">
//             <SocialsPage
//               t={t}
//               onBack={closeSocialsWindow}
//             />
//           </div>
//         </NewWindowPortal>
//       )}

//     </div>
//   )
// }



// import { useState } from 'react'
// import './App.css'

// import {
//   ORDER_OPTIONS,
//   SOCIALS,
//   TRANSLATIONS,
// } from './data/content'

// import SiteHeader from './components/SiteHeader'
// import BackgroundPatterns from './components/BackgroundPatterns'
// import PeopleDecor from './components/PeopleDecor'
// import OrderOptionRow from './components/OrderOptionRow'
// import SocialsPage from './components/SocialsPage'
// import NewWindowPortal from './components/NewWindowPortal'

// export default function App() {
//   const [lang, setLang] = useState('uz')
//   const [socialsWindowOpen, setSocialsWindowOpen] = useState(false)

//   const t = TRANSLATIONS[lang]

//   function openSocialsWindow() {
//     setSocialsWindowOpen(true)
//   }

//   function closeSocialsWindow() {
//     setSocialsWindowOpen(false)
//   }

//   return (
//     <div className="page">

//       <BackgroundPatterns />

//       {/* =========================
//           HEADER (NAV)
//       ========================= */}

//       <SiteHeader lang={lang} onLangChange={setLang} />

//       {/* =========================
//           MAIN CONTENT
//       ========================= */}

//       <main className="content">

//         <h1 className="title">
//           {t.title}
//         </h1>

//         <p className="subtitle">
//           {t.subtitle}
//         </p>

//         <ul className="options">
//           {ORDER_OPTIONS.map((option) => (
//             <OrderOptionRow
//               key={option.id}
//               option={option}
//               text={t.options[option.id]}
//             />
//           ))}
//         </ul>

//         <div className="social-label-row">

//           <p className="social-label">

//             <span className="social-label__full">
//               {t.socialLabel}
//             </span>

//             <span className="social-label__short">
//               {t.socialLabelShort}
//             </span>

//           </p>

//           <button
//             type="button"
//             className="social-view-all"
//             onClick={openSocialsWindow}
//           >
//             {t.viewAll}
//           </button>

//         </div>

//         <ul className="socials">

//           {SOCIALS.map((social) => (
//             <li key={social.id}>

//               <a
//                 className="socials__link"
//                 href={social.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={social.label}
//               >

//                 <img
//                   src={social.icon}
//                   alt=""
//                   className="socials__img"
//                 />

//               </a>

//             </li>
//           ))}

//         </ul>

//         <p className="footer">
//           {t.footer}
//         </p>

//       </main>

//       {/* =========================
//           PEOPLE
//           FAQAT MEN + GIRL
//       ========================= */}

//       <PeopleDecor />

//       {/* =========================
//           SOCIALS — ALOHIDA OYNA
//           (window.open orqali,
//           hash yoki route emas)
//       ========================= */}

//       {socialsWindowOpen && (
//         <NewWindowPortal
//           title={t.socialsTitle}
//           features="width=480,height=800"
//           onClose={closeSocialsWindow}
//         >
//           <div className="page page--popup">

//             <BackgroundPatterns />

//             <SiteHeader lang={lang} onLangChange={setLang} />

//             <SocialsPage
//               t={t}
//               onBack={closeSocialsWindow}
//             />

//             <PeopleDecor />

//           </div>
//         </NewWindowPortal>
//       )}

//     </div>
//   )
// }

















import { useState } from 'react'
import './App.css'

import {
  ORDER_OPTIONS,
  SOCIALS,
  TRANSLATIONS,
} from './data/content'

import SiteHeader from './components/SiteHeader'
import BackgroundPatterns from './components/BackgroundPatterns'
import PeopleDecor from './components/PeopleDecor'
import OrderOptionRow from './components/OrderOptionRow'

// Ijtimoiy tarmoqlar sahifasining alohida domeni.
// Lokal test uchun VITE_SOCIAL_APP_URL ni .env faylida bering,
// masalan: VITE_SOCIAL_APP_URL=https://social.evos.uz
const SOCIAL_APP_URL = import.meta.env.VITE_SOCIAL_APP_URL || '/social.html'

export default function App() {
  const [lang, setLang] = useState('uz')
  const t = TRANSLATIONS[lang]

  return (
    <div className="page">

      <BackgroundPatterns />

      <SiteHeader lang={lang} onLangChange={setLang} />

      <main className="content">

        <h1 className="title">
          {t.title}
        </h1>

        <p className="subtitle">
          {t.subtitle}
        </p>

        <ul className="options">
          {ORDER_OPTIONS.map((option) => (
            <OrderOptionRow
              key={option.id}
              option={option}
              text={t.options[option.id]}
            />
          ))}
        </ul>

        <div className="social-label-row">

          <p className="social-label">

            <span className="social-label__full">
              {t.socialLabel}
            </span>

            <span className="social-label__short">
              {t.socialLabelShort}
            </span>

          </p>

          <a
            href={SOCIAL_APP_URL}
            className="social-view-all"
          >
            {t.viewAll}
          </a>

        </div>

        <ul className="socials">

          {SOCIALS.map((social) => (
            <li key={social.id}>

              <a
                className="socials__link"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >

                <img
                  src={social.icon}
                  alt=""
                  className="socials__img"
                />

              </a>

            </li>
          ))}

        </ul>

        <p className="footer">
          {t.footer}
        </p>

      </main>

      <PeopleDecor />

    </div>
  )
}