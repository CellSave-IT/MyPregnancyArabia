import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { useEffect, useRef } from 'react'
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const StyleModal = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.5s ease-out;
  z-index: 1111;
  overflow-y: auto;
`

const StyleModalWrapper = styled.div`
  animation: ${fadeIn} 0.5s ease-out;
  width: 30%;
  @media (max-width: 1200px) {
    width: 40%;
  }
  @media (max-width: 1024px) {
    width: 60%;
  }
  @media (max-width: 767px) {
    width: 90%;
  }
`

interface ModalProps {
  visible?: boolean
  onClose?: () => void
  children?: any
  style?: any
}

const Modal = ({ children, visible, onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose?.()
    }
  }

  useEffect(() => {
    if (visible) {
      document.body.style.cssText = 'overflow: hidden'
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.body.removeAttribute('style')
      document.body.style.cssText = 'overflow-x:hidden'
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [visible])
  return (
    <>
      {visible && (
        <StyleModal>
          <StyleModalWrapper ref={modalRef}>{children}</StyleModalWrapper>
        </StyleModal>
      )}
    </>
  )
}

export default Modal
