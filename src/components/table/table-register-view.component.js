import TableCell from 'components/table/table-cell.component'
import useGetRegister from 'hooks/Registries/useGetRegister.hook'
import randomKey from 'utils/random-key.util'

export default function TableRegisterView({ id }) {
    const { tableContentKey } = randomKey()
    const { tableTitleKey } = randomKey()
    const { registers } = useGetRegister({ id })
    return (
        <main className='container__table'>
            {/* Implementacion de la tabla  */}

            {/* Titulos de la tabla */}
            <section
                key={tableTitleKey}
                className='container__of__register__table__titles'>
                <TableCell label={'#'}></TableCell>
                <TableCell label={'  Codigo de cuenta'}></TableCell>
                <TableCell label={'Monto'}></TableCell>
                <TableCell label={'Concepto'}></TableCell>
                <TableCell label={'Registro'}></TableCell>
            </section>
            {/* Lista de contenido de la tabla */}
            <section className='container__for__register__table__rows'>
                {Array.isArray(registers) &&
                    registers.map((_register, index) => (
                        <section
                            key={`${tableContentKey}${index}`}
                            className='table__of__accounts__row__register'>
                            <TableCell value={index + 1}></TableCell>
                            <TableCell
                                value={_register.account || 'N/D'}></TableCell>
                            <TableCell
                                value={_register.amount || 'N/D'}></TableCell>
                            <TableCell
                                value={_register.concept || 'N/D'}></TableCell>
                            <TableCell
                                value={
                                    _register.nat_accoun || 'N/D'
                                }></TableCell>
                        </section>
                    ))}
            </section>
        </main>
    )
}
