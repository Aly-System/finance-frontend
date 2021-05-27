import TableCell from 'components/table/table-cell.component'
import useBalancePagination from 'hooks/financial-state/usePaginationBalance.hook'
import Button from 'components/button.component'
import 'styles/components/table-balance.scss'
import { randomKey } from 'utils'

export default function TableBalance() {
    const {
        page,
        handleNextPage,
        handlePrevPage,
        handleFirstPage,
        goToTheLastPage,
        filteredBalance,
    } = useBalancePagination()
    const { tableContentKey } = randomKey()
    const { tableTitleKey } = randomKey()

    return (
        <main className='container__table__balance '>
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
                    {Array.isArray(filteredBalance) &&
                        filteredBalance.map((_accounts, index) => (
                            <section
                                key={`${tableContentKey}${index}`}
                                className='table__of__accounts__row__balance'>
                                <TableCell value={index + 1 + ')'}></TableCell>
                                <TableCell
                                    value={_accounts.account}></TableCell>
                                <TableCell value={_accounts.name}></TableCell>
                                <TableCell
                                    align={'center'}
                                    value={_accounts?.cierre}></TableCell>
                            </section>
                        ))}
                </section>
            </section>
            {/* componentes de paginacion */}
            <div className='container__button__pages'>
                <Button
                    width={'100px'}
                    variant='link'
                    color={'#2980B9'}
                    onClick={handleFirstPage}>
                    Primera
                </Button>
                <Button
                    width={'100px'}
                    variant='link'
                    color={'#2980B9'}
                    onClick={handlePrevPage}>
                    Anterior
                </Button>
                <span className='actual__page__table__balance'>{`PAGINA : ${page}`}</span>
                <Button
                    width={'100px'}
                    color={'#2980B9'}
                    variant='link'
                    onClick={handleNextPage}>
                    Siguiente
                </Button>
                <Button
                    width={'100px'}
                    color={'#2980B9'}
                    variant='link'
                    onClick={goToTheLastPage}>
                    Ultima
                </Button>
            </div>
        </main>
    )
}
