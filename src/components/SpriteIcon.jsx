import PropTypes from 'prop-types'

export default function SpriteIcon({ name, className }) {
  return (
    <svg className={className} aria-hidden="true">
      <use href={`/icons.svg#${name}`} />
    </svg>
  )
}

SpriteIcon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
}
