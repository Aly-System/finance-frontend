import TableCell from 'components/table/table-cell.component'
import Button from 'components/button.component'
import SearchBar from 'components/search-bar.component'

export default function Table_modif({
    width = '980px',
    page,
    handleNextPage,
    handlePrevPage,
    handleFirstPage,
    goToTheLastPage,
    filteredAccount,
    updateKeyword,
    keyword,
}) {
    return (
        <main className='container-table' style={{ width }}>
            <SearchBar
                className='search-coin'
                placeholder='Buscar codigo de cuenta o nombre de la cuenta'
                value={keyword}
                onChange={updateKeyword}
            />

            <section className='table-of-accounts__container__title'>
                <p className='table-title-account'>#</p>
                <p className='table-title-account'>Codigo Cta</p>
                <p className='table-title-account'>Nombre Cta</p>
                <p className='table-title-account'>Cuenta padre</p>
                <p className='table-title-account'>Naturaleza Cta</p>
                <p className='table-title-account'>Accion</p>
            </section>

            <section className='table-of-accounts__table'>
                {Array.isArray(filteredAccount) &&
                    filteredAccount.map((_accounts, index) => (
                        <section className='table-of-accounts__row'>
                            <TableCell value={index + 1}></TableCell>
                            <TableCell value={_accounts.account}></TableCell>
                            <TableCell value={_accounts.name}></TableCell>

                            <TableCell
                                value={
                                    _accounts.fatherAccount?.name || 'N/D'
                                }></TableCell>

                            <TableCell value={_accounts.heading}></TableCell>
                            <div>
                                <a href='/'>ver</a>
                                <a href='/'>editar</a>
                            </div>
                        </section>
                    ))}
            </section>
            <div className='container-button-pages'>
                <Button
                    width={'100px'}
                    className='button-add'
                    variant='link'
                    onClick={handleFirstPage}>
                    Primera
                </Button>
                <Button
                    width={'100px'}
                    className='button-add'
                    variant='link'
                    onClick={handlePrevPage}>
                    Anterior
                </Button>
                <span className='actual-page-table-catalogue'>{`PAGINA : ${page}`}</span>
                <Button
                    width={'100px'}
                    className='button-add'
                    variant='link'
                    onClick={handleNextPage}>
                    Siguiente
                </Button>
                <Button
                    width={'100px'}
                    className='button-add'
                    variant='link'
                    onClick={goToTheLastPage}>
                    Ultima
                </Button>
            </div>
        </main>
    )
}
