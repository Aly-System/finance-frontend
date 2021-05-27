import { useMemo, useState } from 'react'
import useGetCountriesCoins from 'hooks/useGetCountryCoin.hook'

export default function useCoins() {
    //Obtenemos la lista de monedas de la API DE PUBLICA
    const { coins } = useGetCountriesCoins()

    const Steps = {
        STEP_ONE: 1,
        STEP_TWO: 2,
    }
    //Estado que gestiona el paso en el que nos encontramos
    const [step, setStep] = useState(Steps.STEP_ONE)

    //Funciones que nos permiten cambiar de PASO o pestaña
    const toStepOne = _ => setStep(Steps.STEP_ONE)
    const toStepTwo = _ => setStep(Steps.STEP_TWO)

    //Estado que gestiona la keyword mediante la cual filtraremos monedas
    const [keyword, setKeyword] = useState('')

    //capturando el valor del buscador
    const updateKeyword = e => setKeyword(e.target.value)

    //Filtrado de monedad
    const filteredCoins = useMemo(() => {
        return coins.filter(
            coin =>
                coin?.title?.toLowerCase().includes(keyword?.toLowerCase()) ||
                coin?.code?.toLowerCase().includes(keyword?.toLowerCase()) ||
                coin?.symbol?.toLowerCase().includes(keyword?.toLowerCase())
        )
    }, [coins, keyword])

    /**
     * Función que realiza las validaciones para mostrar el tab correspondiente(Historial/ Medicion)
     * @param {Number} tabIndex - Número del tab a verificar
     */

    const checkActiveStep = stepIndex => {
        switch (stepIndex) {
            case Steps.STEP_ONE:
                return step === Steps.STEP_ONE

            case Steps.STEP_TWO:
                return step === Steps.STEP_TWO

            default:
                return false
        }
    }

    return {
        checkActiveStep,
        filteredCoins,
        updateKeyword,
        keyword,
        toStepOne,
        toStepTwo,
        Steps,
    }
}
