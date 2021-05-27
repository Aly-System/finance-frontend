import Http from 'utils/http.util'
import { ErrorAlert } from 'utils/alerts.utils'

export default async function CreateDocuments({ document }) {
    const petition = Http()

    try {
        const { data } = await petition.post('/Documents', document)

        if (data?.error) {
            throw String(data.message)
        }

        return data
    } catch (error) {
        console.error(error)
        ErrorAlert({
            title: 'Error en el envio ',
            message: 'No se pudo agregar la informaión',
        })
    }
}
