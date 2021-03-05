import React,{useState,useEffect,useReducer,useCallback} from 'react'
import ProviderPage from './ProviderPage'
import { httpToken,reducer } from '../../config'

const initialState = {
    FatherAccount:0,
    Id:"",
    Name:""
}

const Provider = () => {

    const [list, setList] = useState([])
    const [error, setError] = useState(null)
    const [state,dispatch] = useReducer(reducer,initialState)

    
    const postProvider = useCallback(async () => {
        try {
            const { data } = await httpToken.post("/Providers", state)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }, [state])

    const onChange = e => dispatch({ type: e.target.name, payload: e.target.value })

    const handleSubmit = async e => {
        e.preventDefault()
        postProvider()
    }

    useEffect(() => {
        const getRegistries = async () => {
            try {
                const { data } = await httpToken.get("/Providers")
                setList(data)
            } catch (error) {
                setError(error)
            }
        }
        getRegistries();
    }, [])

    
    return (
        <ProviderPage 
            list={list}
            error = {error}
            useEffect = {useEffect}
            handleSubmit= {handleSubmit}
            onChange={onChange}
            provider= {state}
        />
    )
}

export default Provider