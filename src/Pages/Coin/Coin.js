import React,{useEffect,useState} from 'react'
import CoinPage from './CoinPage'
import {httpToken} from '../../config'

const Coin = () => {

    
    const [list, setList] = useState([])
    const [error, setError] = useState(null)


    useEffect(() => {
        const getRegistries = async () => {
            try {
                const { data } = await httpToken.get("/Coins")
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
            <CoinPage 
                list = {list}
            />
        </>
    )
}

export default Coin