import React, { useState } from 'react'
import Button from 'components/button.component'
import ModalClients from 'components/modal/modal-clients.component'
import TableClient from 'components/table/table-clients.component'
import { MdAddCircle } from 'react-icons/md'

function Clients() {
    const [isModal, setModal] = useState(false)

    return (
        <div className='screen__content__container'>
            <div className='grid__container__header'>
                <div className='container__header'>
                    <h2 className='title__header'>Clientes</h2>
                    <div className='container-button'>
                        <div className='container-button_add'>
                            <Button
                                className='button'
                                variant='filled'
                                onClick={() => {
                                    setModal(true)
                                }}>
                                <MdAddCircle className='icons' />
                                Agregar cliente
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {isModal && (
                <ModalClients
                    closeModal={() => {
                        setModal(false)
                    }}
                />
            )}
            <TableClient />
        </div>
    )
}

export default React.memo(Clients)
