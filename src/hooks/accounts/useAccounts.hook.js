import { useEffect, useState, useMemo } from 'react'
import getAccountsServices from 'services/accounts/getAccounts.service'
import { useLoader } from 'hooks/'

export default function useAccounts() {
    const INITIAL_PAGE = 1

    //Obtenemos la lista de cuentas *
    const [accounts, setAccounts] = useState([])

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

        getAccountsServices({ page }).then(results => {
            //if (!Array.isArray(results)) return setAccounts([])

            //Actualizar el estado
            setAccounts(results?.data?.result)

            //Guardar el total de paginas
            setTotalPages(results?.data?.totalPage)
            setPage(page)

            loader.hide()
        })
    }

    useEffect(() => {
        //Obtener las cuentas
        if (accounts?.length === 0) return getAccountsPerPage()
    }, [])

    //Estado que gestiona la keyword mediante la cual filtraremos las cuentas
    const [keyword, setKeyword] = useState('')
    //capturando el valor del buscador
    const updateKeyword = e => setKeyword(e.target.value)

    //Filtrado de cuentas
    const filteredAccount = useMemo(() => {
        return accounts?.filter(
            _accounts =>
                _accounts?.account
                    ?.toLowerCase()
                    .includes(keyword?.toLowerCase()) ||
                _accounts?.name?.toLowerCase().includes(keyword?.toLowerCase())
        )
    }, [accounts, keyword])

    return {
        accounts,
        setAccounts,
        page,
        handleNextPage,
        handlePrevPage,
        handleFirstPage,
        goToTheLastPage,
        filteredAccount,
        updateKeyword,
        keyword,
    }
}
