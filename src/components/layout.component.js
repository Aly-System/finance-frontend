import React from 'react'
import Sidebar from 'components/sidebar.component'

export default function Layout({ children }) {
    return (
        <section className='layout'>
            <div className='layout__sidebar'>
                <Sidebar />
            </div>
            <section className='layout__content'>{children}</section>
        </section>
    )
}
