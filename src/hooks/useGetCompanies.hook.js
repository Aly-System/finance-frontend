import { useEffect, useState } from 'react'
import getCompaniesService from 'services/getCompanies.service'
import { useLoader } from 'hooks/'

export default function useGetCompanies() {
    const [companies, setCompanies] = useState([])
    const [loader] = useLoader()

    /**
     *Funcion que obtiene la lista de todas la cuentas
     */
    const getListOfCompanie = () => {
        loader.show()
        getCompaniesService()
            .then(allCompanies => {
                const list_companie = allCompanies?.data?.map(_companies => ({
                    title: _companies.name,
                }))

                setCompanies(list_companie)
            })
            .finally(() => loader.hide())
    }
    useEffect(() => {
        getListOfCompanie()
    }, [])

    return {
        companies,
    }
}
