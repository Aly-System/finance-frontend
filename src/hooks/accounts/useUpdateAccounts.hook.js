import UpdateAccount from 'services/accounts/updateAccount.service'
import { SuccessAlert } from 'utils/alerts.utils'
import { useHistory } from 'react-router-dom'
import { useLoader } from 'hooks/'

export default function useUpdateAccount() {
    const [loader] = useLoader()
    const history = useHistory()

    const sendUpdateAccount = ({
        account,
        heading,
        name,
        fatherAccountId,
        onSucces,
    }) => {
        loader.show()

        UpdateAccount({
            account,
            heading,
            name,
            fatherAccountId: Number(fatherAccountId),
        })
            .then(data => {
                if (typeof data !== 'object') return
                if (Object.keys(data).length < 1) return

                SuccessAlert({
                    title: 'Actualizacion Exitosa',
                    message: 'Se actualizaron correctamente los datos',
                    timer: 3000,
                })

                onSucces({ newAccount: data })
            })
            .finally(() => loader.hide())
    }

    return { sendUpdateAccount }
}
