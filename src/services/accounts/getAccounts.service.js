import Http from 'utils/http.util'
import { ValidationAlert } from 'utils/alerts.utils'

export default async function getAccountsServices({ page } = {}) {
    const petition = Http()
    try {
        const data = await petition.get(`/AccountingAccounts?page=${page}`)
        return data
    } catch (error) {
        console.error(error)
        ValidationAlert({
            title: 'Error al obtener cuentas',
            message: 'No se pudo obtener la lista de cuentas',
        })
    }
}
