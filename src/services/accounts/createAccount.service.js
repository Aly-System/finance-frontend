import Http from 'utils/http.util'
import { ErrorAlert } from 'utils/alerts.utils'

export default async function UpdateAccount({
    account,
    heading,
    name,
    fatherAccountId,
}) {
    const petition = Http()

    try {
        const credentials = {
            Account: account,
            Heading: heading,
            Name: name,
            FatherAccountId: fatherAccountId,
        }
        const { data } = await petition.post('/AccountingAccounts', credentials)

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
