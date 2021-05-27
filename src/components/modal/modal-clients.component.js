import React from 'react'
import Modal from 'components/modal/modal.component'
import FieldText from 'components/field-text.component'
import Button from 'components/button.component'
import logo from '../../assets/img/logo.png'
// import '../../styles/components/modal-provider.scss'

export default function Modal_Provider({ closeModal }) {
    return (
        <Modal closeModal={closeModal}>
            <div className='container-modal-provider'>
                <figure className='logo'>
                    <img src={logo} alt='Logo' />
                </figure>
                <div className='modal-provider-conten'>
                    <form>
                        <FieldText
                            className='margin-bottom'
                            label='Cedula-Ruc'
                            name='Cedula-Ruc'
                            margin={'15px 0'}
                            placeholder='Ingrese una Ruc'
                            required
                        />
                        <FieldText
                            className='margin-bottom'
                            label='Nombre del Cliente'
                            name='Nombre del Cliente'
                            margin={'15px 0'}
                            placeholder='Ingrese el nombre del cliente'
                            required
                        />
                        <FieldText
                            className='margin-bottom'
                            label='Cuenta contable'
                            name='Cuenta contable'
                            margin={'15px 0'}
                            placeholder='Ingrese una cuenta contable'
                            required
                        />
                        <Button
                            className=' button-add'
                            variant='filled'
                            type='submit'
                            margin={'20px 0'}
                            width={500}>
                            Agregar
                        </Button>
                    </form>
                </div>
            </div>
        </Modal>
    )
}
