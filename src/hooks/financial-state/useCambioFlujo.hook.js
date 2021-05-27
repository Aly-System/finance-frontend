import { useEffect, useState } from 'react'
import getCambioFlujoServices from 'services/financial-state/get.CambioFlujo.service'
import { useLoader } from 'hooks/'

export default function useGetCambio() {
    const [cambio, setCambio] = useState([])
    const [loader] = useLoader()

    /**
     *Funcion que obtiene la lista de todas la cuentas padres
     */
    const getListOfCambio = () => {
        loader.show()
        getCambioFlujoServices()
            .then(allCambio => {
                if (typeof allCambio !== 'object') return
                if (Object.keys(allCambio).length === 0) return
                const cambio = allCambio?.data?.map(_Cambio => ({
                    account: _Cambio?.account,
                    name: _Cambio?.name,
                    closing: _Cambio?.cierre,
                }))
                // console.log(`el post father account ${cambio}`)
                console.log(`esto es:${cambio}`)
                setCambio(cambio)
            })
            .finally(() => loader.hide())
    }
    useEffect(() => {
        getListOfCambio()
    }, [])
    // console.log(`el final de father account ${accounts}`)
    return {
        cambio,
    }
}
