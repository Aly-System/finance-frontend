import React, { useState,useEffect } from 'react'
import Routes from './Routes'
import changeSesion from '../Redux/Actions/changeSesion'
import store from '../Redux/store'

const App = () => {

    //definimos el estado como que no esta logeado
    const [state, setState] = useState({ isLogged: false })

    // verificamos el estado del token para saber si esta logeado o no
    useEffect(() => {
        store.subscribe(getState);
        const token = localStorage.getItem("token")

        if (token) {
            store.dispatch(changeSesion(true))
        }
    }, [])

    //obtenemos el estado de la sesion
    const getState = () => {
        setState(store.getState())
    }

    return (
        <Routes
            state={state}
        />
    )
}

export default App