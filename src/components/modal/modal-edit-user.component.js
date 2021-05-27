import React from 'react'
import Modal from 'components/modal/modal.component'
import FieldText from 'components/field-text.component'
import Button from 'components/button.component'

export default function ModalEditarUsuario({ closeModal }) {
    return (
        <Modal closeModal={closeModal}>
            <div className='container-modal-user'>
                <h2 className='modal-title'>Editar Correo electronico</h2>
                {/* <SearchBar className='searchBar' width={500} /> */}
                <div className='modal-user-conten'>
                    <form>
                        <FieldText
                            className='margin'
                            label='Editar correo electronico'
                            name='editar correo electronico'
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
