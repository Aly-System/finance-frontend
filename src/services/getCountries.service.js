import axios from 'axios'
import { ErrorAlert } from 'utils/alerts.utils'

export default async function getCountriesService() {
    try {
        const data = await axios.get('https://restcountries.eu/rest/v2/all')

        return data
    } catch (error) {
        console.error(error)
        ErrorAlert({
            title: 'Error al obtener paises',
            message: 'No se pudo obtener la lista de paises',
        })
    }
}
