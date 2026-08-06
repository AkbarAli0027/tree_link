import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { LANGUAGES } from '../data/content'
import SpriteIcon from './SpriteIcon'

function LanguageSwitcher({ lang, onChange }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const menuRef = useRef(null)
  const triggerRef = useRef(null)

  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0]
  const options = LANGUAGES.filter((l) => l.code !== current.code)

  // Tashqariga bosilganda menyuni yopish
  useEffect(() => {
    if (!open) return undefined
    function onPointerDown(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [open])

  function focusOption(index) {
    const buttons = menuRef.current?.querySelectorAll('[role="option"]')
    buttons?.[index]?.focus()
  }

  function selectOption(code) {
    onChange(code)
    setOpen(false)
    triggerRef.current?.focus()
  }

  function onTriggerKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setOpen((v) => !v)
    } else if (event.key === 'ArrowDown') {
      event.preventDefault()
      setOpen(true)
      setTimeout(() => focusOption(0), 0)
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setOpen(true)
      setTimeout(() => focusOption(options.length - 1), 0)
    }
  }

  function onMenuKeyDown(event, index) {
    if (event.key === 'Escape') {
      event.preventDefault()
      setOpen(false)
      triggerRef.current?.focus()
      return
    }
    if (event.key === 'Tab') {
      setOpen(false)
      return
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      focusOption((index + 1) % options.length)
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      focusOption((index - 1 + options.length) % options.length)
    } else if (event.key === 'Home') {
      event.preventDefault()
      focusOption(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      focusOption(options.length - 1)
    }
  }

  return (
    <div className="lang" ref={rootRef}>
      <button
        ref={triggerRef}
        type="button"
        className={`lang__trigger ${open ? 'lang__trigger--open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onTriggerKeyDown}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls="lang-menu"
      >
        <img className="lang__flag" src={current.flag} alt="" />
        <span className="lang__label">{current.label}</span>
        <SpriteIcon
          name="chevron-down"
          className={`lang__chevron ${open ? 'lang__chevron--rotated' : ''}`}
        />
      </button>

      {open && (
        <ul className="lang__menu" id="lang-menu" role="listbox" aria-label="Til tanlash" ref={menuRef}>
          {options.map((l, index) => (
            <li key={l.code}>
              <button
                type="button"
                className="lang__option"
                role="option"
                aria-selected="false"
                tabIndex={-1}
                onClick={() => selectOption(l.code)}
                onKeyDown={(event) => onMenuKeyDown(event, index)}
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

LanguageSwitcher.propTypes = {
  lang: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default LanguageSwitcher
