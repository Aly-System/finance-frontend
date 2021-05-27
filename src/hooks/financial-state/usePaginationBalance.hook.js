import { useEffect } from 'react'
import getBalanceServices from 'services/financial-state/getBalance.service'
import { useState, useMemo } from 'react'
import { useLoader } from 'hooks/'

export default function useBalancePagination() {
    const INITIAL_PAGE = 1

    //Obtenemos la lista de cuentas *
    const [balance, setBalance] = useState([])

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

        getBalanceServices({ page }).then(results => {
            //if (!Array.isArray(results)) return setAccounts([])

            //Actualizar el estado
            setBalance(results?.data?.result)

            //Guardar el total de paginas
            setTotalPages(results?.data?.totalPage)
            setPage(page)

            loader.hide()
        })
    }

    useEffect(() => {
        //Obtener las cuentas
        if (balance?.length === 0) return getAccountsPerPage()
    }, [])

    //Estado que gestiona la keyword mediante la cual filtraremos las cuentas
    const [keyword, setKeyword] = useState('')
    //capturando el valor del buscador
    const updateKeyword = e => setKeyword(e.target.value)

    //Filtrado de cuentas
    const filteredBalance = useMemo(() => {
        return balance?.filter(
            _balance =>
                _balance.account
                    ?.toLowerCase()
                    .includes(keyword?.toLowerCase()) ||
                _balance.name?.toLowerCase().includes(keyword?.toLowerCase())
        )
    }, [balance, keyword])

    return {
        balance,
        setBalance,
        page,
        handleNextPage,
        handlePrevPage,
        handleFirstPage,
        goToTheLastPage,
        filteredBalance,
        updateKeyword,
        keyword,
    }
}
