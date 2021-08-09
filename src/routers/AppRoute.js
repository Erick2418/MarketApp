import React from 'react'
import {LoginScreen} from "./../components/auth/LoginScreen";
import {RegisterScreen} from "./../components/auth/RegisterScreen";
import {MarketScreen} from "./../components/market/MarketScreen"
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
export const AppRoute = () => {
    return (
        <Router>
            <div>
            <Switch>
                <Route path="/login">
                    <LoginScreen/>
                </Route>
                <Route path="/register">
                   <RegisterScreen/>
                </Route>
                <Route path="/">
                    <MarketScreen/>
                </Route>
            </Switch>
            </div>
            
        </Router>
    )
}
