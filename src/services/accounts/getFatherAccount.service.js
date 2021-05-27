import Http from 'utils/http.util'
import { ValidationAlert } from 'utils/alerts.utils'

export default async function getFatherAccountsServices() {
    const petition = Http()
    try {
        const data = await petition.get('/AccountingAccounts/All')
        return data
    } catch (error) {
        console.error(error)
        ValidationAlert({
            title: 'Error al obtener cuentas',
            message:
                'No se pudo obtener la lista de cuentas o no se han creado información',
        })
    }
}
