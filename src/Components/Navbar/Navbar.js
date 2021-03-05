import React, { useCallback,useState } from 'react'
import store from '../../Redux/store'
import changeSesion from '../../Redux/Actions/changeSesion'
import NavbarPage from './NavbarPage'

const Navbar = () => {
    
    const [show, setShow] = useState(false)

    const handleLogout = useCallback(() => {
        store.dispatch(changeSesion(false))
        localStorage.removeItem('token');
        window.location = '/';
    }, [])

    const handleSesion = e => {
        e.preventDefault();
        handleLogout();
    }

    const handleModal = _ => {
        setShow(!show)
    }

    return (
        <>
            <NavbarPage 
                handleModal= {handleModal}
                handleSesion = {handleSesion}
                show={show}
            />
        </>
    )
}

export default Navbar