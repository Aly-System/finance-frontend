import Modal from 'components/modal/modal.component'
import useCoins from 'hooks/coins/useCoins.hook'
import FieldText from 'components/field-text.component'
import Button from 'components/button.component'
import React from 'react'
import '../../styles/components/modal-ubicacion.scss'

export default function Modal_coins({ closeModal }) {
    const { checkActiveStep, toStepOne, toStepTwo, Steps } = useCoins()

    return (
        <Modal closeModal={closeModal}>
            <div className='container-modal-ubicacion'>
                <div className='modal-ubicacion-conten'>
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
                        <p>Agregar Ubicacion</p>
                        <p>Agregar Sucursal</p>
                    </div>
                </div>

                {checkActiveStep(Steps.STEP_ONE) && (
                    <div className='modal-main'>
                        <h2 className='modal-title'>Ubicacion</h2>
                        <div className='modal-ubicacion-conten'>
                            <form>
                                <FieldText
                                    className='input-ubicacion'
                                    label='Pais'
                                    name='pais'
                                    placeholder='ingrese un pais'
                                />

                                <FieldText
                                    className='input-ubicacion'
                                    label='Region'
                                    name='region'
                                    placeholder='ingrese una region'
                                />

                                <FieldText
                                    className='input-ubicacion'
                                    label='Ciudad'
                                    name='ciudad'
                                    placeholder='ingrese una ciudad'
                                />
                                <Button
                                    className=' button-add '
                                    variant='filled'
                                    type='submit'>
                                    Agregar
                                </Button>
                            </form>
                        </div>
                    </div>
                )}

                {checkActiveStep(Steps.STEP_TWO) && (
                    <div className='modal-main'>
                        <h2 className='modal-title'>Sucursal</h2>
                        <div className='modal-ubicacion-conten'>
                            <form>
                                <div className='grid'>
                                    <FieldText
                                        className='input-ubicacion'
                                        label='Pais'
                                        name='pais'
                                        placeholder='ingrese un pais'
                                    />

                                    <FieldText
                                        className='input-ubicacion'
                                        label='Region'
                                        name='region'
                                        placeholder='ingrese una region'
                                    />

                                    <FieldText
                                        className='input-ubicacion'
                                        label='Ciudad'
                                        name='ciudad'
                                        placeholder='ingrese una ciudad'
                                    />
                                    <FieldText
                                        className='input-ubicacion'
                                        label='Compañia'
                                        name='compañia'
                                        placeholder='ingrese una compañia'
                                    />

                                    <FieldText
                                        className='input-ubicacion'
                                        label='Codigo'
                                        name='codigo'
                                        placeholder='ingrese un codigo'
                                    />

                                    <FieldText
                                        className='input-ubicacion'
                                        label='Direccion'
                                        name='direccion'
                                        placeholder='ingrese una direccion'
                                    />
                                </div>

                                <Button
                                    className=' button-add'
                                    variant='filled'
                                    type='submit'
                                    width={500}>
                                    Agregar
                                </Button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </Modal>
    )
}
