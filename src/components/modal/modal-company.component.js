import Modal from 'components/modal/modal.component'
import useCoins from 'hooks/coins/useCoins.hook'
import FieldText from 'components/field-text.component'
import Button from 'components/button.component'
import React from 'react'
import SearchBar from 'components/search-bar.component'
import Table_ruc from 'components/table-ruc.component'
import '../../styles/components/modal-company.scss'

export default function ModalCompany({ closeModal }) {
    const { checkActiveStep, toStepOne, toStepTwo, Steps } = useCoins()

    return (
        <Modal closeModal={closeModal}>
            <div className='container-modal-company'>
                <div className='modal-company-conten'>
                    <div className='modal-action-container'>
                        <div
                            onClick={toStepOne}
                            className={`stepper__circle ${
                                checkActiveStep(Steps.STEP_ONE) && 'selected'
                            }`}>
                            1
                        </div>
                        <div className='line'></div>
                        <div
                            onClick={toStepTwo}
                            className={`stepper__circle stepper__circle--last ${
                                checkActiveStep(Steps.STEP_TWO) && 'selected'
                            }`}>
                            2
                        </div>
                    </div>
                    <div className='modal-action-container-title'>
                        <p>Agregar Compañia</p>
                        <p>Agregar Ruc</p>
                    </div>
                </div>

                {checkActiveStep(Steps.STEP_ONE) && (
                    <div className='modal-main'>
                        <h2 className='modal-title'>Nombre de la compañia</h2>
                        <div className='modal-ubicacion-conten'>
                            <form>
                                <FieldText
                                    className='input-company'
                                    label='Nombre de la compañia'
                                    name='nombre de la compañia'
                                    placeholder='ingrese nombre de la compañia'
                                />
                                <Button
                                    className=' button-add'
                                    variant='filled'
                                    type='submit'>
                                    + Agregar compañia
                                </Button>
                            </form>
                        </div>
                    </div>
                )}

                {checkActiveStep(Steps.STEP_TWO) && (
                    <div className='modal-main'>
                        <h2 className='modal-title'>Agregar Ruc</h2>
                        <div className='modal-ubicacion-conten'>
                            <SearchBar />
                            <Table_ruc width={'500px'} margin={'20px'} />
                            <form>
                                <Button
                                    className=' button-add'
                                    width={'500px'}
                                    variant='filled'
                                    type='submit'>
                                    Añadir
                                </Button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </Modal>
    )
}
