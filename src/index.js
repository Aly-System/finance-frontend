import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// import context provider
import AppProvider from 'store/authUser.store'
import BackOfficeProvider from 'store/backOffice.store'

ReactDOM.render(
    <React.StrictMode>
        <AppProvider>
            <BackOfficeProvider>
                <App />
            </BackOfficeProvider>
        </AppProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
