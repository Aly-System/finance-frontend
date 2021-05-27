import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

import { MdClose as CloseIcon } from 'react-icons/md'

export default function Modal({ children, closeModal = () => {} }) {
    const handleClick = e => {
        e.stopPropagation()
    }

    //Deshabilitar el scroll cuando se cargue el modal
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

    return ReactDOM.createPortal(
        <div className='modal__overlay' /*onClick={closeModal}*/>
            <div className='modal__content' onClick={handleClick}>
                <div className='modal__close-icon'>
                    <CloseIcon onClick={closeModal} size={32} />
                </div>
                {children}
            </div>
        </div>,
        document.getElementById('modal-root')
    )
}
