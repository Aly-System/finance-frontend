import { useEffect, useState } from 'react'
import getFatherAccountsServices from 'services/accounts/getFatherAccount.service'
import { useLoader } from 'hooks/'

export default function useGetFatherAccount() {
    const [accounts, setAccounts] = useState([])
    const [loader] = useLoader()

    /**
     *Funcion que obtiene la lista de todas la cuentas padres
     */
    const getListOfFatherAccount = () => {
        //loader.show()
        getFatherAccountsServices()
            .then(allFatherAccount => {
                const fatherAccounts = allFatherAccount?.data?.map(account => ({
                    value: `${account.id}`,
                    label: `${account.name}`,
                }))
                // console.log(`el post father account ${fatherAccounts}`)
                setAccounts(fatherAccounts)
            })
            .finally(() => loader.hide())
    }
    useEffect(() => {
        getListOfFatherAccount()
    }, [])
    // console.log(`el final de father account ${accounts}`)
    return {
        accounts,
    }
}
