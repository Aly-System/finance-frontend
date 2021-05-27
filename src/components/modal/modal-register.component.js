import FieldNote from 'components/field-note.component'
import FieldText from 'components/field-text.component'
import Select from 'react-select'
import Button from 'components/button.component'
import useCrudRegister from 'hooks/useCrudRegister.hook'
import { TiDelete as DeleteIcon } from 'react-icons/ti'
import { useForm } from 'react-hook-form'
import Modal from 'components/modal/modal.component'
import useGetFatherAccount from 'hooks/accounts/useGetFatherAccount.hook'
import useCreateDocuments from 'hooks/Registries/useCreateRegister.hook'

export default function Modal_Register({
    closeModal,
    updateDocumentInTheInterface,
}) {
    const { accounts } = useGetFatherAccount()
    const { register, handleSubmit, errors } = useForm()
    const { sendDocument } = useCreateDocuments()
    /*hook que gestiona creacion y eliminacion de la filas de registros */
    const { deleteRow, createRow, rows } = useCrudRegister()
    /**Callback que se ejecuta despues de crear un nuevo documento
     * @param  {Object} {newDocument}
     * @return  {void} =>{closeModal(
     */
    const capturar = value => {
        console.log(value)
    }
    const onSubmit = data => {
        const records = rows.map(row => ({
            value: Number(data[`amount-${row.id}`]),
            notes: data[`concept-${row.id}`],
            charge: data[`charge-${row.id}`],
            documentId: data.id,
            accountId: Number(data[`account-${row.id}`]),
        }))

        sendDocument({
            id: data.id,
            description: data.description,
            records,
            onSucces: ({ newDocument }) => {
                closeModal()
                updateDocumentInTheInterface({ newDocument })
            },
        })
    }

    return (
        <Modal closeModal={closeModal}>
            <section className='container__modal--register'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <section className='content__voucher'>
                        <h3>Detalles del comprobante</h3>
                        <FieldText
                            name='id'
                            label='Codigo de comprobante'
                            placeholder='ingrese el codigo de la cuenta'
                            inputRef={register({ required: true })}
                            errorMessage={
                                errors.name ? 'Ingrese un valor valido' : ''
                            }
                        />
                        <FieldNote
                            label='Concepto'
                            name='description'
                            placeholder='Agregue un concepto'
                            inputRef={register({ required: true })}
                            errorMessage={
                                errors.name ? 'Ingrese un valor valido' : ''
                            }
                        />
                    </section>
                    <section className='content__register'>
                        <h3>Detalles del registro</h3>
                        {rows.map(row => (
                            <div
                                key={row.id}
                                className='inputs__content--voucher'>
                                {/* <select
                                    className='dropdown'
                                    ref={register({ required: true })}
                                    name={`account-${row.id}`}>
                                    {accounts.map((account, index) => (
                                        <option
                                            key={index}
                                            value={account.value}>
                                            {account.title}
                                        </option>
                                    ))}
                                </select> */}
                                <Select
                                    className='dropdown'
                                    name={`account-${row.id}`}
                                    ref={register({ required: true })}
                                    onChange={capturar}
                                    placeholder='Selecione una opcion'
                                    value={accounts.value}
                                    options={accounts}
                                    theme={theme => ({
                                        ...theme,
                                        borderRadius: 8,

                                        colors: {
                                            ...theme.colors,
                                            primary: '#ffac41', //primero de la lista
                                            // primary25: '#ffac41', //selecion de hover
                                            // neutral0: '#2e3238', //color de fondo
                                            // neutral20: '#222831', //color de los bordes
                                            // neutral60: '#ffac41', //color del icono de flecha
                                            // neutral80: '#fff', //color de texto
                                        },
                                    })}
                                />

                                <FieldText
                                    name={`amount-${row.id}`}
                                    label='Monto '
                                    placeholder='Ingrese un monto'
                                    type='number'
                                    inputRef={register({ required: true })}
                                    errorMessage={
                                        errors.name
                                            ? 'Ingrese un valor valido'
                                            : ''
                                    }
                                />
                                <FieldText
                                    name={`concept-${row.id}`}
                                    label='Concepto'
                                    placeholder='Agregar  un concepto'
                                    inputRef={register({ required: true })}
                                    errorMessage={
                                        errors.name ? 'Ingrese una nota' : ''
                                    }
                                />

                                <select
                                    className='dropdown'
                                    ref={register({ required: true })}
                                    name={`charge-${row.id}`}>
                                    <option value={1}>Debe</option>
                                    <option value={2}>Haber</option>
                                </select>

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
                        <div className='container__button--action'>
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
                                variant='filled'
                                type='submit'>
                                Guardar
                            </Button>
                        </div>
                    </section>
                </form>
            </section>
        </Modal>
    )
}
