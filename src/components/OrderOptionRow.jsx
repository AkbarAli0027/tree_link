import PropTypes from 'prop-types'
import SpriteIcon from './SpriteIcon'

export default function OrderOptionRow({ option, text }) {
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

OrderOptionRow.propTypes = {
  option: PropTypes.shape({
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    divideAfter: PropTypes.bool,
  }).isRequired,
  text: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
}
