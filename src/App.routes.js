import { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
// import components
import { PrivateRoute } from 'components'
import Layout from 'components/layout.component.js'
import LayoutBackOffice from 'components/layout-backoffice.component'
// import views
import { Login, Framework } from 'views'
//impotacion de paginas del modulo contabilidad
import Catalogue from 'views/catalogue.view'
import Clients from 'views/clients.view'
import Contra_partida from 'views/contra-partida.view'
import Financial_state from 'views/financial-state.view'
import Provider from 'views/provider.view'
import Documents from 'views/documents.view'
import Home from 'views/home.view'
import BackOffice from 'views/backoffice/backoffice.view'
// importacion de paginas de backoffice
import Coins from 'views/backoffice/coins.view'
import Ubication from 'views/backoffice/ubication.view'
import User from 'views/backoffice/user.view'
import Company from 'views/backoffice/company.view'

//importación del modo root
import { BackOfficeContext } from 'store/backOffice.store'

export default function AppRoutes() {
    const backoffice = useContext(BackOfficeContext)

    return (
        <Switch>
            <Route exact path='/acceso' component={Login}></Route>
            <PrivateRoute
                exact={true}
                path='/Framework'
                component={Framework}></PrivateRoute>
            {!backoffice.status && (
                <Layout>
                    <PrivateRoute exact path='/' component={Home} />
                    <PrivateRoute
                        exact
                        path='/contra/partida'
                        component={Contra_partida}
                    />
                    <PrivateRoute
                        exact
                        path='/catalogue'
                        component={Catalogue}
                    />
                    <PrivateRoute exact path='/clients' component={Clients} />

                    <PrivateRoute
                        exact
                        path='/financial/state'
                        component={Financial_state}
                    />

                    <PrivateRoute exact path='/provider' component={Provider} />
                    <PrivateRoute
                        exact
                        path='/Documents'
                        component={Documents}
                    />
                </Layout>
            )}
            {backoffice.status && (
                <LayoutBackOffice>
                    <PrivateRoute
                        exact={true}
                        path='/'
                        component={BackOffice}
                    />
                    <PrivateRoute
                        exact={true}
                        path='/moneda'
                        component={Coins}
                    />
                    <PrivateRoute
                        exact={true}
                        path='/ubication'
                        component={Ubication}
                    />
                    <PrivateRoute
                        exact={true}
                        path='/company'
                        component={Company}
                    />
                    <PrivateRoute exact={true} path='/user' component={User} />
                </LayoutBackOffice>
            )}
        </Switch>
    )
}
