import CreateDocuments from 'services/registries/createRegister.services'
import { SuccessAlert } from 'utils/alerts.utils'
import { useLoader } from 'hooks/'

export default function useCreateDocuments() {
    const [loader] = useLoader()

    /**
     * @param  {Number} {id
     * @param  {String} description
     * @param  {Array} records
     * @param  {Function} onSucces
     * @return  {void} }
     */
    const sendDocument = ({ id, description, records, onSucces }) => {
        const newDocument = {
            document: {
                id,
                description,
            },
            registries: records,
        }

        console.log(newDocument)

        loader.show()

        CreateDocuments({ document: newDocument })
            .then(data => {
                if (typeof data !== 'object') return
                if (Object.keys(data).length < 1) return

                SuccessAlert({
                    title: 'Documento Agregado',
                    message: 'Se agregaron correctamente los datos',
                    timer: 3000,
                })

                onSucces({ newDocument: data })
            })
            .finally(() => loader.hide())
    }

    return { sendDocument }
}
