import React from 'react'
import Modal from 'components/modal/modal.component'
import FieldText from 'components/field-text.component'
import Button from 'components/button.component'
import logo from '../../assets/img/logo.png'
import '../../styles/components/modal-user.scss'

export default function ModalUser({ closeModal }) {
    return (
        <Modal closeModal={closeModal}>
            <div className='container-modal-user'>
                <figure className='logo'>
                    <img src={logo} alt='Logo' />
                </figure>
                <div className='modal-user-conten'>
                    <form>
                        <FieldText
                            className='margin-bottom'
                            label='Correo'
                            name='correo'
                            placeholder='Ingresa tu correo electronico'
                        />
                        <FieldText
                            className='margin-bottom'
                            label='Contraseña'
                            name='contraseña'
                            margin={'20px 0'}
                            placeholder='Ingresa tu contraseña'
                            type='password'
                        />
                        <Button
                            className=' button-add'
                            variant='filled'
                            type='submit'
                            margin={'20px 0'}
                            width={500}>
                            Crear usuario
                        </Button>
                    </form>
                </div>
            </div>
        </Modal>
    )
}
