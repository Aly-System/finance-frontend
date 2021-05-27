import { useState } from 'react'
import TableCell from 'components/table/table-cell.component'
import Button from 'components/button.component'
import SearchBar from 'components/search-bar.component'
import { randomKey } from 'utils'
import ModalCatalogueUpdate from 'components/modal/modal-catalogue-update.component'
export default function Table_catalog({
    //gestionamos la props de hook useAccount
    page,
    handleNextPage,
    handlePrevPage,
    handleFirstPage,
    goToTheLastPage,
    filteredAccount,
    updateKeyword,
    keyword,
    tableContentKey = randomKey(),
    tableTitleKey = randomKey(),
}) {
    //hook que gestiona el estado del modal
    const [isModal, setModal] = useState(false)
    return (
        <main className='container__table'>
            <SearchBar
                className='search-coin'
                placeholder='Buscar codigo de cuenta o nombre de la cuenta'
                value={keyword}
                onChange={updateKeyword}
            />
            {/* Implementacion de la tabla  */}

            {/* Titulos de la tabla */}
            <section
                key={tableTitleKey}
                className='container__of__catalog__table__titles'>
                <TableCell label={'#'}></TableCell>
                <TableCell label={'  Codigo de cuenta'}></TableCell>
                <TableCell label={'Nombre de cuenta'}></TableCell>
                <TableCell label={'Cuenta padre'}></TableCell>
                <TableCell label={'Naturaleza de la cuenta'}></TableCell>
                <TableCell align={'center'} label={'Accion'}></TableCell>
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
                            <Button
                                color={'#226f54'}
                                variant='link'
                                align={'center'}
                                width={'150px'}
                                onClick={() => {
                                    setModal(true)
                                }}>
                                Editar
                            </Button>
                        </section>
                    ))}
            </section>
            {/* componentes de paginacion */}
            <div className='container__button__pages'>
                <Button
                    width={'100px'}
                    variant='link'
                    onClick={handleFirstPage}>
                    Primera
                </Button>
                <Button width={'100px'} variant='link' onClick={handlePrevPage}>
                    Anterior
                </Button>
                <span className='actual-page-table-catalogue'>{`PAGINA : ${page}`}</span>
                <Button width={'100px'} variant='link' onClick={handleNextPage}>
                    Siguiente
                </Button>
                <Button
                    width={'100px'}
                    variant='link'
                    onClick={goToTheLastPage}>
                    Ultima
                </Button>
            </div>
            {/* modal que permite actualizar los datos de la tabla */}
            {isModal && (
                <ModalCatalogueUpdate
                    closeModal={() => {
                        setModal(false)
                    }}
                />
            )}
        </main>
    )
}
