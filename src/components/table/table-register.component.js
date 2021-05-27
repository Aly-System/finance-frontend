import TableCell from 'components/table/table-cell.component'
import Button from 'components/button.component'
import SearchBar from 'components/search-bar.component'
import ModalRegisterViewdate from 'components/modal/modal-register-view-data.component'
import { randomKey } from 'utils'
import useModal from 'hooks/useModal.hook'

export default function Table_register({
    filteredDocuments,
    page,
    handleNextPage,
    handlePrevPage,
    handleFirstPage,
    goToTheLastPage,
    updateKeyword,
    keyword,
}) {
    // le asignamos una key a la tabla
    const { tableTitleKey } = randomKey()
    //hook que gestiona el estado del modal
    const { modalIsOpen, modalData, openModal, closeModal } = useModal()

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
                className='container__of__register__table__titles'>
                <TableCell label={'#'}></TableCell>
                <TableCell label={'  Codigo de cuenta'}></TableCell>
                <TableCell label={'Descripción del comprobante'}></TableCell>
                <TableCell align={'center'} label={'Fecha'}></TableCell>
                <TableCell align={'center'} label={'Accion'}></TableCell>
            </section>
            {/* Lista de contenido de la tabla */}
            <section className='container__for__register__table__rows'>
                {Array.isArray(filteredDocuments) &&
                    filteredDocuments.map((voucher, index) => (
                        <section
                            key={voucher.id}
                            className='table__of__accounts__row__register'>
                            <TableCell value={index + 1}></TableCell>
                            <TableCell value={voucher?.id}></TableCell>
                            <TableCell value={voucher?.description}></TableCell>
                            <TableCell
                                align={'center'}
                                value={voucher?.date || 'N/D'}></TableCell>
                            <Button
                                className='table-button'
                                color={'#226f54'}
                                variant='link'
                                margin={'0 auto'}
                                width={'150px'}
                                onClick={() => {
                                    openModal({ data: voucher.id })
                                }}>
                                vizualizar
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
            {modalIsOpen && (
                <ModalRegisterViewdate id={modalData} closeModal={closeModal} />
            )}
        </main>
    )
}
