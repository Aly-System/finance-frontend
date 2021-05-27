import React, { useState } from 'react'
import Button from 'components/button.component'
import ModalUbicacion from 'components/modal/modal-ubicacion.component'
import TableUbicacion from 'components/table/table-ubicacion.component'
import { MdAddCircle } from 'react-icons/md'

const Ubication = () => {
    const [isModal, setModal] = useState(false)
    return (
        <div className='screen__content__container'>
            <div className=' grid__container__header'>
                <div className='container__header '>
                    <h2 className='title__header'>Ubicacion</h2>
                    <div className='container-button'>
                        <div className='container-button_add'>
                            <Button
                                className='button-add'
                                variant='filled'
                                onClick={() => {
                                    setModal(true)
                                }}>
                                <MdAddCircle className='icons' />
                                Agregar Ubicacion
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <TableUbicacion />
            {isModal && (
                <ModalUbicacion
                    closeModal={() => {
                        setModal(false)
                    }}
                />
            )}
        </div>
    )
}

export default React.memo(Ubication)
