import CreateAccount from 'services/accounts/createAccount.service'
import { SuccessAlert } from 'utils/alerts.utils'
import { useHistory } from 'react-router-dom'
import { useLoader } from 'hooks/'

export default function useCreateAccount() {
    const [loader] = useLoader()
    const history = useHistory()

    const sendAccount = ({
        account,
        heading,
        name,
        fatherAccountId,
        onSucces,
    }) => {
        loader.show()

        CreateAccount({
            account,
            heading,
            name,
            fatherAccountId: Number(fatherAccountId),
        })
            .then(data => {
                if (typeof data !== 'object') return
                if (Object.keys(data).length < 1) return

                SuccessAlert({
                    title: 'Cuenta Agregada',
                    message: 'Se agregaron correctamente los datos',
                    timer: 3000,
                })

                onSucces({ newAccount: data })
            })
            .finally(() => loader.hide())
    }

    return { sendAccount }
}
