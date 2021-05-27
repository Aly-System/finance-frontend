import { useState } from 'react'
import Modal from 'components/modal/modal.component'
import FieldText from 'components/field-text.component'
import FieldSelect from 'components/field-select.component'
import Button from 'components/button.component'
import { useForm } from 'react-hook-form'
import useUpdateAccount from 'hooks/accounts/useUpdateAccounts.hook'
import useGetFatherAccount from 'hooks/accounts/useGetFatherAccount.hook'
export default function ModalCatalogueUpdate({ closeModal }) {
    // se obtiene todas la lista de la cuentas
    const { accounts } = useGetFatherAccount()
    //hook que permite controlar el formulario
    const { register, handleSubmit, errors } = useForm()
    //actualizacion del de la cuentas
    const [fatherAccount, setFatherAccount] = useState('')
    //funcion que gestiona los inputs a la hora del envio de informacion

    return (
        <Modal closeModal={closeModal}>
            <div className='container__modal__catalogue'>
                <h2 className='modal__title'>Actualizar datos</h2>
                <div className='modal__catalogue__content'>
                    <form>
                        <FieldText
                            inputRef={register({ required: true })}
                            name='name'
                            label='Nombre de la Cta '
                            placeholder='ingrese nombre de la Cta'
                            errorMessage={
                                errors.name ? 'Ingrese un valor valido' : ''
                            }
                        />
                        <FieldText
                            inputRef={register({ required: true })}
                            name='account'
                            label='Codigo de la Cta '
                            placeholder='ingrese codigo de la Cta'
                            errorMessage={
                                errors.account ? 'Ingrese un valor ' : ''
                            }
                        />
                        <FieldSelect
                            onChange={event =>
                                setFatherAccount(event.target.value)
                            }
                            label='Cta. Padre '
                            placeholder='Selecione una opcion'
                            options={accounts}
                        />

                        <FieldSelect
                            inputRef={register({ required: true })}
                            name='heading'
                            label='Naturaleza de la Cta '
                            placeholder='Selecione una opcion'
                            errorMessage={
                                errors.heading ? 'Ingrese un valor ' : ''
                            }
                            options={[
                                { value: 1, title: 'D' },
                                { value: 2, title: 'H' },
                                { value: 3, title: 'D/H' },
                            ]}
                        />
                        <Button
                            width={'360px'}
                            type='submit'
                            className=' button-add'
                            variant='filled'
                            type='submit'>
                            Actualizar
                        </Button>
                    </form>
                </div>
            </div>
        </Modal>
    )
}
