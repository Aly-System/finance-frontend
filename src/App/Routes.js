import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from '../Pages/Main/Main'
import Login from '../Pages/Login/Login'
import Country from '../Pages/Country/Country'
import Registry from '../Pages/Registry/Registry'
import Voucher from '../Pages/Voucher/Voucher'
import CounterPart from '../Pages/CounterPart/CounterPart'
import AccountingCatalog from '../Pages/AccountingCatalog/AccountingCatalog'
import Document from '../Pages/Document/Document'
import Client from '../Pages/Client/Client'
import Provider from '../Pages/Provider/Provider'
import PaymentRequest from '../Pages/PaymentRequest/PaymentRequest'
import Coin from '../Pages/Coin/Coin'
import State from '../Pages/State/State'
import NotFound from '../Pages/NotFound/NotFound'


const Routes = ({ state }) => {

    return (
        <>
            <BrowserRouter>
                <Switch>
                    {
                        state.isLogged &&
                        <>
                            <Route exact path='/' component={Country} />
                            <Route exact path='/Main' component={Main} />
                            <Route exact path='/registry' component={Registry} />
                            <Route exact path='/voucher' component = {Voucher} />
                            <Route exact path='/counterpart' component={CounterPart} />
                            <Route exact path='/accountingcatalog' component={AccountingCatalog} />
                            <Route exact path='/document' component={Document} />
                            <Route exact path='/client' component={Client} />
                            <Route exact path='/provider' component={Provider} />
                            <Route exact path='/paymentrequest' component={PaymentRequest} />
                            <Route exact path='/coin' component={Coin} />
                            <Route exact path='/state' component={State} />
                        </>
                    }
                    {
                        !state.isLogged &&
                        <>
                            <Route exact path='/' component={Login} />
                        </>
                    }
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Routes