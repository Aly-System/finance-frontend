import { useEffect, useState } from 'react'
import getBalanceServices from 'services/financial-state/getBalance.service'
import { useLoader } from 'hooks/'

export default function useGetBalance() {
    const [balance, setBalance] = useState([])
    const [loader] = useLoader()

    /**
     *Funcion que obtiene la lista de todas la cuentas padres
     */
    const getListOfBalance = () => {
        loader.show()
        getBalanceServices()
            .then(allBalance => {
                if (typeof allBalance !== 'object') return
                if (Object.keys(allBalance).length === 0) return
                const balance = allBalance.data.result.map(_balance => ({
                    account: _balance?.account,
                    name: _balance?.name,
                    closing: _balance?.cierre,
                }))
                // console.log(`el post father account ${balance}`)
                console.log(balance)
                setBalance(balance)
            })
            .finally(() => loader.hide())
    }
    useEffect(() => {
        getListOfBalance()
    }, [])

    // console.log(`el final de father account ${accounts}`)
    return {
        balance,
    }
}
