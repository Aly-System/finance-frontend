import React, { useState } from 'react'
import Button from 'components/button.component'
import Modal_Register from 'components/modal/modal-register.component'
import Table_register from 'components/table/table-register.component'
import useDocuments from 'hooks/Registries/useDocuments.hook'

const Documents = () => {
    const [isModal, setModal] = useState(false)

    const tableProps = useDocuments()

    const updateDocumentInTheInterface = ({ newDocument }) => {
        const { documents, setDocuments } = tableProps

        const updateDocument = [...documents, newDocument]
        //actualizacion del estado
        setDocuments(updateDocument)
    }
    return (
        <div className='screen__content__container'>
            <div className='grid__container__header'>
                <div className='container__header'>
                    <h2 className='title__header'>Registro</h2>
                    <Button
                        align={'center'}
                        variant='filled'
                        onClick={() => {
                            setModal(true)
                        }}>
                        + Agregar nuevo registro
                    </Button>
                </div>
            </div>
            <Table_register {...tableProps} />
            {isModal && (
                <Modal_Register
                    updateDocumentInTheInterface={updateDocumentInTheInterface}
                    closeModal={() => {
                        setModal(false)
                    }}
                />
            )}
        </div>
    )
}
export default React.memo(Documents)
