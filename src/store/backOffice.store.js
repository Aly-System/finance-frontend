import React from 'react'
import useBackOffice from 'hooks/useBackOffice.hook'

export const BackOfficeContext = React.createContext({})

const BackOfficeProvider = ({ children }) => {
    const backoffice = useBackOffice()

    return (
        <BackOfficeContext.Provider value={backoffice}>
            {children}
        </BackOfficeContext.Provider>
    )
}

export default BackOfficeProvider
