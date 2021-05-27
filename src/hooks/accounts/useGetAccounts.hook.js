import { useEffect, useState } from 'react'
import getAccountsServices from 'services/accounts/getAccounts.service'
import { useLoader } from 'hooks/'

export default function useGetAccountsCatalogue() {
    const [accounts, setAccounts] = useState([])
    const [loader] = useLoader()

    /**
     *Funcion que obtiene la lista de todas la cuentas
     */
    const getListOfAccountsCatalogue = () => {
        loader.show()
        getAccountsServices()
            .then(allAccountsCatalogue => {
                const catalogue_accounts =
                    allAccountsCatalogue?.data?.data?.result.map(_accounts => ({
                        account: _accounts.account,
                        title: _accounts.name,
                        father: _accounts?.fatherAccount
                            ? _accounts.fatherAccount
                            : 'father',
                        nature_of_the_account: _accounts.heading,
                        action: _accounts.rucs,
                    }))

                setAccounts(catalogue_accounts)
            })
            .finally(() => loader.hide())
    }
    useEffect(() => {
        getListOfAccountsCatalogue()
    }, [])

    return {
        accounts,
    }
}
