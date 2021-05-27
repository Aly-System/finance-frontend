import React from 'react'
import Modal from 'components/modal/modal.component'
import FieldText from 'components/field-text.component'
import Button from 'components/button.component'

export default function ModalEditClient({ closeModal }) {
    return (
        <Modal closeModal={closeModal}>
            <div className='container-modal-editar-client'>
                <div className='modal-editar-client-conten'>
                    <h2 className='modal-title'>Editar nombre del cliente</h2>
                    <form>
                        <FieldText
                            className='margin-bottom'
                            label='Nombre del cliente'
                            name='nombre del cliente'
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
