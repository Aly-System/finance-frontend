import { useEffect, useContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// import styles
import 'styles/index.scss'

// import routes
import AppRoutes from './App.routes'

// import components
import { AppLoader, AppErrorAlert } from 'components'

// import hooks
import { useLoader } from 'hooks'
import { AppAlerts } from 'utils'

import { AppContext } from 'store/authUser.store' //

export default function App() {
    // configuring app loader
    const [loader, enableLoader] = useLoader(<AppLoader />)
    // init AppAlerts config
    const { 1: enableAlerts } = AppAlerts(AppErrorAlert)

    const { checkTokenExpiration } = useContext(AppContext) //
    // Initial config for app
    const initComponent = _ => {
        enableLoader()
        enableAlerts()
    }

    useEffect(_ => {
        initComponent()
        checkTokenExpiration() //
    }, [])

    return (
        <main className='App'>
            <Router>
                <AppRoutes />
            </Router>

            {loader.render()}
        </main>
    )
}
