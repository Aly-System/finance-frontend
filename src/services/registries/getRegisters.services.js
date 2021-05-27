import Http from 'utils/http.util'
import { ValidationAlert } from 'utils/alerts.utils'

export default async function getRegisterServices({ id } = {}) {
    const petition = Http()
    try {
        const response = await petition.get(`/Documents/${id}`)

        return response
    } catch (error) {
        console.error(error)
        ValidationAlert({
            title: 'Error al obtener registro',
            message: 'No se pudo obtener la lista de registro',
        })
    }
}
