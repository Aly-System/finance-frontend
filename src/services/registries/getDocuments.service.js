import Http from 'utils/http.util'
import { ValidationAlert } from 'utils/alerts.utils'

export default async function getDocumentServices({ page } = {}) {
    const petition = Http()
    try {
        const response = await petition.get(`/Documents?page=${page}`)
        return response
    } catch (error) {
        console.error(error)
        ValidationAlert({
            title: 'Error al obtener registros',
            message: 'No se pudo obtener la lista de registros',
        })
    }
}
