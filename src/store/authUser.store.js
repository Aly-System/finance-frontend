import React from 'react'
import useAuthUser from 'hooks/useAuthUser.hook'

export const AppContext = React.createContext({})

const AppProvider = ({ children }) => {
    const authUser = useAuthUser()

    return (
        <AppContext.Provider value={authUser}>{children}</AppContext.Provider>
    )
}

export default AppProvider
