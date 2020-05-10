import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import { Order } from './components/Order'
// import { Query } from './components/Query'
// import { Ticket } from './components/Ticket'
import { Journey } from './components/Journey'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Journey}></Route>
            {/*<Route path="/order"  component={Order}></Route>*/}
            {/*<Route path="/query" component={Query}></Route>*/}
            {/*<Route path="/ticket" component={Ticket}></Route>*/}
        </Switch>
    </BrowserRouter>
)