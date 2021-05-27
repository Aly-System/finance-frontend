import TableCell from 'components/table/table-cell.component'
import useAccounts from 'hooks/accounts/useAccounts.hook'
import { randomKey } from 'utils'
import SearchBar from 'components/search-bar.component'
import 'styles/components/table-ubicacion.scss'

export default function Table_ubicacion({
    tableTitleKey = randomKey(),
    tableContentKey = randomKey(),
}) {
    const { filteredAccount } = useAccounts()

    return (
        <main className='container__table'>
            <div className='container__table__label'>
                <label className='container__table__label'>Compañia</label>
                <label className='container__table__label'>Pais</label>
                <label className='container__table__label'>Region</label>
                <label className='container__table__label'>Ciudad</label>
            </div>
            <div className='container__search__bar'>
                <SearchBar width={'230px'} />
                <SearchBar width={'230px'} />
                <SearchBar width={'230px'} />
                <SearchBar width={'230px'} />
            </div>
            {/* Titulos de la tabla */}
            <section
                key={tableTitleKey}
                className='container__of__catalog__table__titles'>
                <TableCell label={'Compañia'}></TableCell>
                <TableCell label={''}></TableCell>
                <TableCell label={'BranchOffice'}></TableCell>
                <TableCell label={''}></TableCell>
                <TableCell label={'Direccion'}></TableCell>
            </section>

            {/* Lista de contenido de la tabla */}
            <section className='container__for__catalog__table__rows'>
                {Array.isArray(filteredAccount) &&
                    filteredAccount.map((_accounts, index) => (
                        <section
                            key={`${tableContentKey}${index}`}
                            className='table__of__accounts__row__catalog'>
                            <TableCell value={index + 1}></TableCell>
                            <TableCell value={_accounts.account}></TableCell>
                            <TableCell value={_accounts.name}></TableCell>

                            <TableCell
                                value={
                                    _accounts.fatherAccount?.name || 'N/D'
                                }></TableCell>

                            <TableCell
                                align={'center'}
                                value={_accounts.heading}></TableCell>
                        </section>
                    ))}
            </section>
        </main>
    )
}
