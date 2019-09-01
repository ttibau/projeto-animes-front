import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { isAuthenticated } from './services/auth'
import { Main, Login } from './pages'

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
           <Component {...props} /> 
        ) : (
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
    )} />
)

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/main' component={Main} />
                <Route exact path='/login' component={Login} />
                <PrivateRoute path='/main' component={Main} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes