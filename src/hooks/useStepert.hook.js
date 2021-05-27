import { useState } from 'react'

export default function useStepper() {
    const Steps = {
        STEP_ONE: 1,
        STEP_TWO: 2,
    }

    //Estado que gestiona el paso en el que nos encontramos
    const [step, setStep] = useState(Steps.STEP_ONE)

    //Funciones que nos permiten cambiar de PASO o pestaña
    const toStepOne = _ => setStep(Steps.STEP_ONE)
    const toStepTwo = _ => setStep(Steps.STEP_TWO)

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
        toStepOne,
        toStepTwo,
        Steps,
        step,
    }
}
