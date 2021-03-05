import React,{useState,useEffect,useReducer,useCallback} from 'react'
import ClientPage from './ClientPage'
import { httpToken,reducer } from '../../config'

const initialState = {
    Id: "",
    Name: "",
    FatherAccount:0
}

const Client = () => {

    const [list, setList] = useState([])

    const [error, setError] = useState(null)

    const [state,dispatch] = useReducer(reducer,initialState)
    

    const postClient = useCallback(async () => {
        try {
            const { data } = await httpToken.post("/Clients", state)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }, [state])

    const onChange = e => dispatch({ type: e.target.name, payload: e.target.value })

    const handleSubmit = async e => {
        e.preventDefault()
        postClient()
    }

    useEffect(() => {
        const getRegistries = async () => {
            try {
                const { data } = await httpToken.get("/Clients")
                setList(data)
            } catch (error) {
                setError(error)
            }
        }
        getRegistries();
    }, [])


    return (
        <ClientPage 
            list = {list}
            error = {error}
            useEffect = {useEffect}
            handleSubmit = {handleSubmit}
            onChange = {onChange}
            client = {state}
        />
    )
}

export default Client