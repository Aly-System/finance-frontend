import { useMemo, useState, useEffect } from 'react'
import getDocumentServices from 'services/registries/getDocuments.service'
import { useLoader } from 'hooks'

export default function useDocuments() {
    const INITIAL_PAGE = 1

    //Obtenemos la lista de cuentas *
    const [documents, setDocuments] = useState([])

    const [totalPages, setTotalPages] = useState(0)

    //Iniciamos estado de la paginación
    const [page, setPage] = useState(INITIAL_PAGE)

    const [loader] = useLoader()

    //funcion que permite hacer la paginacion a la siguiente pagina
    const handleNextPage = () => {
        let currentPage = page

        let nextPage = currentPage + 1

        if (nextPage > totalPages) {
            nextPage = totalPages
        }

        if (page !== totalPages) getAccountsPerPage({ page: nextPage })
    }
    //funcion que permite hacer la paginacion a la anterior pagina
    const handlePrevPage = () => {
        let currentPage = page

        let prevPage = currentPage - 1

        if (prevPage < 1) {
            prevPage = 1
        }

        if (page !== INITIAL_PAGE) getAccountsPerPage({ page: prevPage })
    }

    //funcion que permite hacer la paginacion a la primera pagina
    const handleFirstPage = () => {
        let firstPage = INITIAL_PAGE

        if (page !== INITIAL_PAGE) getAccountsPerPage({ page: firstPage })
    }
    //funcion que te permite hacer la paginación a la ultima pagina

    const goToTheLastPage = () => {
        const lastPage = totalPages

        if (page !== totalPages) getAccountsPerPage({ page: lastPage })
    }

    // cambiamos el valor de la pagina
    const getAccountsPerPage = ({ page = INITIAL_PAGE } = {}) => {
        loader.show()

        getDocumentServices({ page }).then(results => {
            //if (!Array.isArray(results)) return setAccounts([])

            //Actualizar el estado
            setDocuments(results?.data?.result)

            //Guardar el total de paginas
            setTotalPages(results?.data?.totalPage)
            setPage(page)

            loader.hide()
        })
    }

    useEffect(() => {
        //Obtener las cuentas
        if (documents?.length === 0) return getAccountsPerPage()
    }, [])

    //controlamos el estado de los valores ingresados
    const [keyword, setKeyword] = useState('')
    //capturamos el valor del input para la busqueda de registro
    const updateKeyword = e => setKeyword(e.target.value)

    //filtraciones de los registros
    const filteredDocuments = useMemo(() => {
        return documents?.filter(
            _document =>
                _document?.id?.toLowerCase().includes(keyword?.toLowerCase()) ||
                _document?.description
                    ?.toLowerCase()
                    .includes(keyword?.toLowerCase()) ||
                _document?.date?.toLowerCase().includes(keyword?.toLowerCase())
        )
    }, [documents, keyword])

    return {
        page,
        goToTheLastPage,
        handleFirstPage,
        handlePrevPage,
        handleNextPage,
        setDocuments,
        documents,
        filteredDocuments,
        updateKeyword,
        keyword,
    }
}
