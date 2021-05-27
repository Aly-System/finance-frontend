import { useEffect, useState } from 'react'
import getConciliacionServices from 'services/financial-state/getConciliacion.service'
import { useLoader } from 'hooks/'

export default function useGetConciliacion() {
    const [conciliacion, setConciliacion] = useState([])
    const [loader] = useLoader()

    /**
     *Funcion que obtiene la lista de todas la cuentas padres
     */
    const getListOfConciliacion = () => {
        loader.show()
        getConciliacionServices()
            .then(allConciliacion => {
                if (typeof allConciliacion !== 'object') return
                if (Object.keys(allConciliacion).length === 0) return
                const conciliacion = allConciliacion?.data?.map(
                    _Conciliacion => ({
                        account: _Conciliacion?.account,
                        name: _Conciliacion?.name,
                        closing: _Conciliacion?.cierre,
                    })
                )
                // console.log(`el post father account ${conciliacion}`)
                console.log(`esto es:${conciliacion}`)
                setConciliacion(conciliacion)
            })
            .finally(() => loader.hide())
    }
    useEffect(() => {
        getListOfConciliacion()
    }, [])
    // console.log(`el final de father account ${accounts}`)
    return {
        conciliacion,
    }
}
