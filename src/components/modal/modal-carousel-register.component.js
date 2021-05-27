import { useRef } from 'react'
import Modal from 'components/modal/modal.component'
import FieldText from 'components/field-text.component'
import FieldNote from 'components/field-note.component'
import Button from 'components/button.component'
import { TiDelete as DeleteIcon } from 'react-icons/ti'
import { useForm } from 'react-hook-form'
import useCrudRegister from 'hooks/useCrudRegister.hook'
import FieldSelect from 'components/field-select.component'
import useStepper from 'hooks/useStepert.hook'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function ModalRegiste({ closeModal }) {
    const { register, handleSubmit, watch, errors } = useForm()
    const Steps = {
        ONE: 0,
        TWO: 1,
    }
    let slider
    const voucherRef = useRef(null)

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        dotsClass: 'slick-dots slick-thumb',
    }

    const { deleteRow, createRow, rows } = useCrudRegister()
    const COUNT = [
        { value: 1, title: 'Banco' },
        { value: 2, title: 'Caja' },
        { value: 3, title: 'Costo' },
        { value: 4, title: 'Gastos' },
        { value: 5, title: 'Capital' },
        { value: 6, title: 'Ingresos' },
    ]

    const goToStepOne = () => {
        slider.slickGoTo(Steps.ONE)
        voucherRef.current.style.overflow = 'hidden'
        voucherRef.current.style.height = '400px'
    }
    const goToStepTwo = () => {
        slider.slickGoTo(Steps.TWO)
        voucherRef.current.style.overflow = 'auto'
        voucherRef.current.style.height = 'auto'
    }

    ///const { checkActiveStep, toStepOne, toStepTwo, Steps } = useStepper()

    return (
        <Modal closeModal={closeModal}>
            <section>
                <div className='stepper-container'>
                    <h2 className='modal-title'>
                        Agregar un nuevo comprobante
                    </h2>
                    <div className='container-stepper_button'>
                        <button
                            className='button-carousel_register'
                            onClick={goToStepOne}>
                            Datos del comprobante
                        </button>
                        <button
                            className='button-carousel_register'
                            onClick={goToStepTwo}>
                            Detalles del comprobante
                        </button>
                    </div>
                </div>
                <div ref={voucherRef} className='container-modal-register'>
                    <Slider ref={_slider => (slider = _slider)} {...settings}>
                        {/*--------------Paso #1--------------*/}
                        <section className='article-register_one'>
                            <div className='container-voucher'>
                                <div className='inputs-container-voucher'>
                                    <FieldText
                                        name='code-account'
                                        label='Codigo de comprobante '
                                        placeholder='ingrese el codigo de la cuenta'
                                        ref={register}
                                    />
                                    <FieldNote />
                                </div>
                            </div>
                        </section>
                        {/*--------------Paso #2--------------*/}
                        <section className='article__register__two'>
                            <div className='content__voucher'>
                                {rows.map((row, index) => (
                                    <div
                                        key={row.id}
                                        className='inputs__content__voucher'>
                                        <FieldSelect
                                            name={`count-${index}`}
                                            label='Cuenta'
                                            options={COUNT}
                                            ref={register}
                                            type='number'
                                        />
                                        <FieldText
                                            name={`amount-${index}`}
                                            label='Monto '
                                            placeholder='Ingrese un monto'
                                            ref={register}
                                            type='number'
                                        />
                                        <FieldText
                                            name={`note-${index}`}
                                            label='Concepto'
                                            placeholder='Agregar  un concepto'
                                            ref={register}
                                        />

                                        <FieldSelect
                                            name={`Registrar-${index}`}
                                            label='Registrar'
                                            options={[
                                                { value: 1, title: 'D' },
                                                { value: 2, title: 'H' },
                                            ]}
                                            ref={register}
                                        />

                                        <DeleteIcon
                                            color='red'
                                            size={32}
                                            onClick={() =>
                                                deleteRow({
                                                    id: row.id,
                                                })
                                            }
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className='container__button__action'>
                                <Button
                                    align={'left '}
                                    width={'150px'}
                                    onClick={createRow}
                                    className='button-add'
                                    variant='link'>
                                    Agregar fila
                                </Button>
                                <Button
                                    width={'120px'}
                                    className=' button-add'
                                    variant='filled'>
                                    Guardar
                                </Button>
                            </div>
                        </section>
                    </Slider>
                </div>
            </section>
        </Modal>
    )
}
