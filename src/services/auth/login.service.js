import Http from 'utils/http.util'
import { ErrorAlert } from 'utils/alerts.utils'

export default async function login({ email, password }) {
    const petition = Http()

    try {
        const credentials = {
            Email: email,
            Password: password,
        }

        const response = await petition.post('/Account/Login', credentials)

        if (response?.error) {
            throw String(response.message)
        }
        return response.data
    } catch (error) {
        console.error(error)
        ErrorAlert({
            title: 'Credenciales incorrectas',
            message: 'Su usuario o contraseña es incorrecto',
        })
    }
}
