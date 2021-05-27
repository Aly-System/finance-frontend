import React, { useState } from 'react'
import Button from 'components/button.component'
import ModalCompany from 'components/modal/modal-company.component'
import { MdAddCircle } from 'react-icons/md'
import TableCompany from 'components/table/table-company.component'

const Company = () => {
    const [isModal, setModal] = useState(false)
    return (
        <div className='screen__content__container'>
            <div className='grid__container__header'>
                <div className='container__header '>
                    <h2 className='title__header'>Compañia</h2>
                    <div className='container-button'>
                        <div className='container-button_add'>
                            <Button
                                className='button-add'
                                variant='filled'
                                onClick={() => {
                                    setModal(true)
                                }}>
                                <MdAddCircle className='icons' />
                                Agregar Compañia
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <TableCompany />
            {isModal && (
                <ModalCompany
                    closeModal={() => {
                        setModal(false)
                    }}
                />
            )}
        </div>
    )
}

export default React.memo(Company)
