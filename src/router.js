import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Order } from './components/order'
import { Query } from './components/query'
import { Ticket } from './components/ticket'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Order}></Route>
            <Route path="/query" component={Query}></Route>
            <Route path="/ticket" component={Ticket}></Route>
        </Switch>
    </BrowserRouter>
)