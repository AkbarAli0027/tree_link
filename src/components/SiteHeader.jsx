// import PropTypes from 'prop-types'
// import LanguageSwitcher from './LanguageSwitcher'

// export default function SiteHeader({ lang, onLangChange, onLogoClick }) {
//   return (
//     <header className="nav">
//       <div className="nav__inner">

        
//           href="/"
//           className="brand"
//           aria-label="EVOS bosh sahifasi"
//           onClick={(event) => {
//             if (onLogoClick) {
//               event.preventDefault()
//               onLogoClick()
//             }
//           }}
//         >
//           <img
//             src="/patterns/EVOSLogo.svg"
//             alt="EVOS"
//             className="brand__logo"
//           />
//         </a>

//         <LanguageSwitcher
//           lang={lang}
//           onChange={onLangChange}
//         />

//       </div>
//     </header>
//   )
// }

// SiteHeader.propTypes = {
//   lang: PropTypes.string.isRequired,
//   onLangChange: PropTypes.func.isRequired,
//   onLogoClick: PropTypes.func,
// }



import PropTypes from 'prop-types'
import LanguageSwitcher from './LanguageSwitcher'

export default function SiteHeader({ lang, onLangChange, onLogoClick }) {
  return (
    <header className="nav">
      <div className="nav__inner">

        <a
          href="/"
          className="brand"
          aria-label="EVOS bosh sahifasi"
          onClick={(event) => {
            if (onLogoClick) {
              event.preventDefault()
              onLogoClick()
            }
          }}
        >
          <img
            src="/patterns/EVOSLogo.svg"
            alt="EVOS"
            className="brand__logo"
          />
        </a>

        <LanguageSwitcher
          lang={lang}
          onChange={onLangChange}
        />

      </div>
    </header>
  )
}

SiteHeader.propTypes = {
  lang: PropTypes.string.isRequired,
  onLangChange: PropTypes.func.isRequired,
  onLogoClick: PropTypes.func,
}