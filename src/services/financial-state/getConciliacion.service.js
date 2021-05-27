import Http from 'utils/http.util'
import { ValidationAlert } from 'utils/alerts.utils'

export default async function getConciliacionServices() {
    const petition = Http()
    try {
        const data = await petition.get('AccountingAccounts/closing')
        return data
    } catch (error) {
        console.error(error)
        ValidationAlert({
            title: 'Error al obtener cuentas',
            message: 'No se pudo obtener los cierres de balance general',
        })
    }
}
