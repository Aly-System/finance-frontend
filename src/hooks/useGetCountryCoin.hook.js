import { useEffect, useState } from 'react'
import getCountriesService from 'services/getCountries.service'
import { useLoader } from 'hooks/'

export default function useGetCountriesCoins() {
    const [coins, setCoins] = useState([])
    const [loader] = useLoader()

    /**
     *Funcion que obtiene la lista de todos los paises
     */
    const getListOfCountriesCoins = () => {
        loader.show()
        getCountriesService()
            .then(allCountriesCoins => {
                const coins_countries = allCountriesCoins?.data.map(
                    country => ({
                        title: country.name,
                        code: country.currencies[0].code,
                        symbol: country.currencies[0].symbol,
                    })
                )

                setCoins(coins_countries)
            })
            .finally(() => loader.hide())
    }

    useEffect(() => {
        getListOfCountriesCoins()
    }, [])

    return {
        coins,
    }
}
