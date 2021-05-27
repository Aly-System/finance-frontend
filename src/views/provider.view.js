import React, { useState } from 'react'
import Button from 'components/button.component'
import ModalProvider from 'components/modal/modal-provider.component'
import TableProvider from 'components/table/table-provider.component'
import { MdAddCircle } from 'react-icons/md'

function Provider() {
    const [isModal, setModal] = useState(false)

    return (
        <div className='screen__content__container'>
            <div className='grid__container__header'>
                <div className='container__header'>
                    <h2 className='title__header'>Proveedores</h2>
                    <div className='container-button'>
                        <div className='container-button_add'>
                            <Button
                                className='button'
                                variant='filled'
                                onClick={() => {
                                    setModal(true)
                                }}>
                                <MdAddCircle className='icons' />
                                Agregar proveedor
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <TableProvider />
            {isModal && (
                <ModalProvider
                    closeModal={() => {
                        setModal(false)
                    }}
                />
            )}
        </div>
    )
}

export default React.memo(Provider)
