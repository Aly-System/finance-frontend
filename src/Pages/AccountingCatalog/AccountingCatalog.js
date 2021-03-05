import React, { useState, useEffect, useReducer, useCallback } from 'react'
import AccountingCatalogPage from './AccountingCatalogPage'
import { httpToken, reducer } from '../../config'



const initialState = {
    Name: "",
    Notes: "",
    FatherAccount: "",
}

const AccountingCatalog = () => {

    const [list, setList] = useState([])
    const [error, setError] = useState(null)
    const [state, dispatch] = useReducer(reducer, initialState)

    const postAccountingAccount = useCallback(async () => {
        try {
            const { data } = await httpToken.post("/AccountingAccounts", state)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }, [state])

    const onChange = e => dispatch({ type: e.target.name, payload: e.target.value })

    const handleSubmit = async e => {
        e.preventDefault()
        postAccountingAccount()
    }



    useEffect(() => {
        const getRegistries = async () => {
            try {
                const { data } = await httpToken.get("/AccountingAccounts")
                setList(data)
                console.log(data);
            } catch (error) {
                setError(error)
            }
        }
        getRegistries();
    }, [])







    return (
        <>
            <AccountingCatalogPage
                list={list}
                error={error}
                useEffect={useEffect}
                onChange= {onChange}
                handleSubmit= {handleSubmit}
            />
        </>
    )
}

export default AccountingCatalog