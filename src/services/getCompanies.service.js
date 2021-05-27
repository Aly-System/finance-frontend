import Http from 'utils/http.util'
import { ErrorAlert } from 'utils/alerts.utils'

export default async function getCompaniesService() {
    const petition = Http()
    try {
        const data = await petition.get('/Companies')

        return data
    } catch (error) {
        console.error(error)
        ErrorAlert({
            title: 'Error al obtener lista de compañia',
            message: 'No se pudo obtener la lista de compañia',
        })
    }
}
