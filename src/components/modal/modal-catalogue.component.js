import { useState } from 'react'
import Modal from 'components/modal/modal.component'
import FieldText from 'components/field-text.component'
import FieldSelect from 'components/field-select.component'
import Button from 'components/button.component'

import { useForm } from 'react-hook-form'
import useCreateAccount from 'hooks/accounts/useCreateAccount.hook'
import useGetFatherAccount from 'hooks/accounts/useGetFatherAccount.hook'
export default function ModalCatalogue({
    closeModal,
    updateAccountInTheInterface,
}) {
    const { accounts } = useGetFatherAccount()
    const { register, handleSubmit, errors } = useForm()
    const { sendAccount } = useCreateAccount()

    const [fatherAccount, setFatherAccount] = useState('')

    const onSubmit = ({ account, heading, name }) => {
        sendAccount({
            account,
            heading,
            name,
            fatherAccountId: fatherAccount,
            onSucces: ({ newAccount }) => {
                closeModal()
                updateAccountInTheInterface({ newAccount })
            },
        })
    }

    return (
        <Modal closeModal={closeModal}>
            <div className='container-modal-catalogue'>
                <h2 className='modal__title'>Agregar una nueva cuenta</h2>
                <div className='modal-catalogue-content'>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                            Guardar
                        </Button>
                    </form>
                </div>
            </div>
        </Modal>
    )
}
