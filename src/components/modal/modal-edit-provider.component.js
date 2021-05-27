import React from 'react'
import Modal from 'components/modal/modal.component'
import FieldText from 'components/field-text.component'
import Button from 'components/button.component'
import logo from '../../assets/img/logo.png'

export default function ModalEditProvider({ closeModal }) {
    return (
        <Modal closeModal={closeModal}>
            <div className='container-modal-editar-provider'>
                {/* <figure className='logo'>
                    <img src={logo} alt='Logo' />
                </figure> */}
                <div className='modal-editar-provider-conten'>
                    <h2 className='modal-title'>Editar nombre del proveedor</h2>
                    <form>
                        <FieldText
                            className='margin-bottom'
                            label='Nombre del proveedor'
                            name='nombre del proveedor'
                        />
                        <Button
                            className=' button-add'
                            variant='filled'
                            type='submit'
                            margin={'300px 0 0 0'}
                            width={500}>
                            Agregar
                        </Button>
                    </form>
                </div>
            </div>
        </Modal>
    )
}
