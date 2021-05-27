import { useEffect, useState } from 'react'
import getEstadoServices from 'services/financial-state/get.Estado.service'
import { useLoader } from 'hooks/'

export default function useGetEstado() {
    const [estado, setEstado] = useState([])
    const [loader] = useLoader()

    /**
     *Funcion que obtiene la lista de todas la cuentas padres
     */
    const getListOfEstado = () => {
        loader.show()
        getEstadoServices()
            .then(allEstado => {
                if (typeof allEstado !== 'object') return
                if (Object.keys(allEstado).length === 0) return
                const estado = allEstado?.data?.map(_estado => ({
                    account: _estado?.account,
                    name: _estado?.name,
                    closing: _estado?.cierre,
                }))
                // console.log(`el post father account ${Estado}`)
                console.log(`esto es:${estado}`)
                setEstado(estado)
            })
            .finally(() => loader.hide())
    }
    useEffect(() => {
        getListOfEstado()
    }, [])
    // console.log(`el final de father account ${accounts}`)
    return {
        estado,
    }
}
