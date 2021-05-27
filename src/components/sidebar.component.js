import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import Button from 'components/button.component'
import img_user from '../assets/img/img-user.jpg'
import cerrarSesion from 'hooks/auth/useLogout.hook'

//importaciones de iconss
import { MdChromeReaderMode } from 'react-icons/md'
import { MdClass } from 'react-icons/md'
import { MdContacts } from 'react-icons/md'
import { MdSupervisorAccount } from 'react-icons/md'
import { MdInsertChart } from 'react-icons/md'
import { MdAssignmentTurnedIn } from 'react-icons/md'
import { MdExitToApp } from 'react-icons/md'

function Sidebar() {
    return (
        <div className='container-sidebar'>
            <Link exact to='/'>
                <figure className='sidebar-logo'>
                    <img src={logo} alt='Logo' />
                </figure>
            </Link>
            <nav className='sidebar__options'>
                <NavLink exact to='/documents' activeClassName='selected'>
                    <MdAssignmentTurnedIn className='icons' />
                    Documentos
                </NavLink>

                <NavLink exact to='/contra/partida' activeClassName='selected'>
                    <MdChromeReaderMode className='icons' />
                    Contra Partida
                </NavLink>

                <NavLink exact to='/catalogue' activeClassName='selected'>
                    <MdClass className='icons' />
                    Catalogo Contable
                </NavLink>

                <NavLink exact to='/clients' activeClassName='selected'>
                    <MdContacts className='icons' />
                    Clientes
                </NavLink>

                <NavLink exact to='/provider' activeClassName='selected'>
                    <MdSupervisorAccount className='icons' />
                    Proveedores
                </NavLink>

                <NavLink exact to='/financial/state' activeClassName='selected'>
                    <MdInsertChart className='icons' />
                    Estados Financieros
                </NavLink>
            </nav>
            <div className='sidebar-image-profile'>
                <img src={img_user} alt='image-profile' />

                <div className='user-data'>
                    <p className='sidebar-name-profile'>Aly Finances </p>
                    <p className='sidebar-permiso-profile'>Admin</p>
                </div>
            </div>
            <Button
                className='button'
                margin={'0 0 10px 0'}
                onClick={cerrarSesion}
                color={'#fff'}
                width={'190px'}
                variant='link'>
                <MdExitToApp className='icon' />
                cerrar sesion
            </Button>
        </div>
    )
}
export default React.memo(Sidebar)
