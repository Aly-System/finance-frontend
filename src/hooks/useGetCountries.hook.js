import { useEffect, useState } from 'react'
import getCountriesService from 'services/getCountries.service'

export default function useGetCountries() {
    const [countries, setCountries] = useState([])

    /**
     *Funcion que obtiene la lista de todos los paises
     */
    const getListOfCountries = () => {
        getCountriesService().then(allCountries => {
            const _countries = allCountries?.data.map(country => {
                return {
                    title: country.name,
                    value: country.numericCode,
                }
            })

            setCountries(_countries)
        })
    }

    useEffect(() => {
        getListOfCountries()
    }, [])

    return {
        countries,
    }
}
