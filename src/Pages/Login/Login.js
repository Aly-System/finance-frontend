import React, { useCallback, useState } from 'react'
import {http} from '../../config'
import store from '../../Redux/store'
import changeSesion from '../../Redux/Actions/changeSesion'
import LoginPage from './LoginPage'

const initialState = {
    Email: "",
    Password: ""
}

const Login = () => {

    //defino el estado de mi formulario
    const [state, setState] = useState(initialState)

    //cambio el estado segun mi formulario
    const onChange = e => setState({
        ...state,
        [e.target.name]: e.target.value
    })

    //con esto cambio el estado del login en el store
    const handleLogin = useCallback(async () => {
        try {
            console.log(state)
            // const response = await http.post("/Account/Login", state)
            const { data } = await http.post("/Account/Login", state)
            console.log(data)
            if (data) {
                localStorage.setItem('token', data.token)
                store.dispatch(changeSesion(true))
            }
        } catch (error) {
            console.log(error)
        }
    }, [state])

    //mando a verificar mi login y si se verifica correctamente cambio el estado de store
    const handleSubmit = e => {
        e.preventDefault();
        handleLogin();
    }

    return (
        <LoginPage
            handleSubmit={handleSubmit}
            onChange={onChange}
            state={state}
        />
    )
}

export default Login