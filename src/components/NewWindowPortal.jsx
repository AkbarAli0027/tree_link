import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

// Bu komponent bolalarini (children) hozirgi oynada emas,
// balki window.open() orqali ochilgan mutlaqo alohida
// brauzer oynasiga portal qilib chizadi. Hech qanday
// #hash yoki /route ishlatilmaydi — chinakam yangi oyna.
export default function NewWindowPortal({
  children,
  onClose,
  title = '',
  features = 'width=480,height=800',
}) {
  const containerRef = useRef(document.createElement('div'))
  const newWindowRef = useRef(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const win = window.open('', '_blank', features)

    if (!win) {
      // Brauzer popupni bloklagan bo'lishi mumkin
      onClose?.()
      return
    }

    newWindowRef.current = win
    win.document.title = title

    // Asosiy oynadagi barcha <link rel="stylesheet"> va <style>
    // teglarini yangi oynaga ko'chiramiz, shunda dizayn bir xil bo'ladi
    const head = win.document.head
    document
      .querySelectorAll('link[rel="stylesheet"], style')
      .forEach((node) => {
        head.appendChild(node.cloneNode(true))
      })

    win.document.body.style.margin = '0'
    win.document.body.appendChild(containerRef.current)

    setMounted(true)

    function handleUnload() {
      onClose?.()
    }

    win.addEventListener('beforeunload', handleUnload)

    // Foydalanuvchi oynani qo'lda yopganini kuzatib turamiz
    const closeCheckInterval = setInterval(() => {
      if (win.closed) {
        clearInterval(closeCheckInterval)
        onClose?.()
      }
    }, 500)

    return () => {
      clearInterval(closeCheckInterval)
      win.removeEventListener('beforeunload', handleUnload)
      win.close()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!mounted) {
    return null
  }

  return createPortal(children, containerRef.current)
}

NewWindowPortal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  title: PropTypes.string,
  features: PropTypes.string,
}