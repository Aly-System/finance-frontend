import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import img_user from '../assets/img/img-user.jpg'

//importaciones de iconss

import { MdMonetizationOn } from 'react-icons/md'
import { MdLocationOn } from 'react-icons/md'
import { MdBusiness } from 'react-icons/md'
import { MdPerson } from 'react-icons/md'

function SidebarBackOffice() {
    return (
        <div className='container-sidebar'>
            <Link exact to='/'>
                <figure className='sidebar-logo'>
                    <img src={logo} alt='Logo' />
                </figure>
            </Link>
            <nav className='sidebar__options'>
                <NavLink exact to='/moneda' activeClassName='selected'>
                    <MdMonetizationOn className='icons' />
                    Moneda
                </NavLink>

                <NavLink exact to='/ubication' activeClassName='selected'>
                    <MdLocationOn className='icons' />
                    Ubicacion
                </NavLink>

                <NavLink exact to='/company' activeClassName='selected'>
                    <MdBusiness className='icons' />
                    Compañia
                </NavLink>

                <NavLink exact to='/user' activeClassName='selected'>
                    <MdPerson className='icons' />
                    Usuario
                </NavLink>
            </nav>

            <figure className='sidebar-image-profile'>
                <img src={img_user} alt='image-profile' />
                <div className='user-data'>
                    <p className='sidebar-name-profile'>Aly</p>
                    <p className='sidebar-permiso-profile'>Admin</p>
                </div>
            </figure>
        </div>
    )
}
export default React.memo(SidebarBackOffice)
