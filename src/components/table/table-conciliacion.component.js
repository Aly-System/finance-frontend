import TableCell from 'components/table/table-cell.component'
import useGetCambio from 'hooks/financial-state/useCambioFlujo.hook'
import useGetConciliacion from 'hooks/financial-state/useConciliacion.hook'
import 'styles/components/table-balance.scss'
import { randomKey } from 'utils'

export default function TableConciliacion() {
    const { conciliacion } = useGetConciliacion()
    const { tableContentKey } = randomKey()
    const { tableTitleKey } = randomKey()
    return (
        <main className='container__table__balance'>
            <section className='content__table'>
                <section
                    key={tableTitleKey}
                    className='container__of__balance__table__titles'>
                    <TableCell label={'#'}></TableCell>
                    <TableCell label={'Codigo'}></TableCell>
                    <TableCell label={'Nombre'}></TableCell>
                    <TableCell align={'center'} label={'Cierre'}></TableCell>
                </section>
                {/* Lista de contenido de la tabla */}
                <section className='container__for__balance__table__rows'>
                    {Array.isArray(conciliacion) &&
                        conciliacion.map((_accounts, index) => (
                            <section
                                key={`${tableContentKey}${index}`}
                                className='table__of__accounts__row__balance'>
                                <TableCell value={index + 1 + ')'}></TableCell>
                                <TableCell
                                    value={_accounts.account}></TableCell>
                                <TableCell value={_accounts.name}></TableCell>
                                <TableCell
                                    align={'center'}
                                    value={_accounts?.closing}></TableCell>
                            </section>
                        ))}
                </section>
            </section>
        </main>
    )
}
