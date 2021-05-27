import React from 'react'
import Modal from 'components/modal/modal.component'
import FieldText from 'components/field-text.component'
import TableRuc from 'components/table-ruc.component'
import Button from 'components/button.component'

export default function ModalRuc({ closeModal }) {
    return (
        <Modal closeModal={closeModal}>
            <div className='container-modal-ruc'>
                <h2 className='modal-title'>Ruc</h2>
                {/* <SearchBar className='searchBar' width={500} /> */}
                <div className='modal-ruc-conten'>
                    <form>
                        <FieldText
                            className='margin'
                            label='RUC'
                            name='ruc'
                            placeholder='ingrese una ruc'
                        />
                        <TableRuc width={'500px'} />
                        <Button
                            className='button-add'
                            margin={'0px 0px 20px 0'}
                            variant='filled'
                            type='submit'
                            width={500}>
                            Agregar Ruc
                        </Button>
                    </form>
                </div>
            </div>
        </Modal>
    )
}
