import { useEffect, useState } from 'react'
import getRegisterServices from 'services/registries/getRegisters.services'
import { useLoader } from 'hooks'

export default function useGetRegister({ id }) {
    //iniciamos el estado de los registros
    const [registers, setRegister] = useState([])
    const [loader] = useLoader()

    //funcion que permite traerte la lista de registros
    const getListRegister = id => {
        loader.show()
        getRegisterServices(id)
            .then(allregister => {
                const list_register = allregister.data?.map(_register => ({
                    account: _register.accountName,
                    amount: _register.value,
                    concept: _register.notes,
                    nat_accoun: _register.charge,
                }))

                setRegister(list_register)
            })
            .finally(() => loader.hide())
    }
    useEffect(() => {
        getListRegister({ id })
    }, [])
    return { registers }
}
