import React from 'react'
import SidebarBackOffice from 'components/sidebar-backoffice.component'

export default function LayoutBackOffice({ children }) {
    return (
        <section className='layout'>
            <div className='layout__sidebar'>
                <SidebarBackOffice />
            </div>
            <section className='layout__content'>{children}</section>
        </section>
    )
}
