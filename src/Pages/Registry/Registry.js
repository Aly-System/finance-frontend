import React,{useState,useReducer,useCallback,useEffect} from 'react'
import RegistryPage from './RegistryPage'
import { httpToken,reducer } from '../../config'



const initialState = {
    Id:0,
    Reference:0,
    Condition:"",
    State:"",
    Value:"",
    ExchangeRate:"",
    DolarValue:"",
    Consecutive:"",
    DocumentId:"",
    BranchOfficeId:"",
    CoinId:"",
    ClientId:"",
    ProviderID:"",
    AccountantId:""
}



const Registry = () => {

    const [list, setList] = useState([])
    const [error, setError] = useState(null)
    const [state,dispatch] = useReducer(reducer,initialState)

    
    const postRegistry = useCallback(async () => {
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
        postRegistry()
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
        <>
            <RegistryPage 
            list={list}
            error = {error}
            useEffect = {useEffect}
            handleSubmit= {handleSubmit}
            onChange={onChange}
            provider= {state}

            />
        </>
    )
}

export default Registry