import Http from 'utils/http.util'
import { ValidationAlert } from 'utils/alerts.utils'

export default async function getBalanceServices({ page } = {}) {
    const petition = Http()
    try {
        const response = await petition.get(
            `AccountingAccounts/closingPaginate?page=${page}`
        )

        return response
    } catch (error) {
        console.error(error)
        ValidationAlert({
            title: 'Error al obtener cuentas',
            message: 'No se pudo obtener los cierres de balance general',
        })
    }
}
