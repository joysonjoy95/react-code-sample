import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";

import Login from "./views/Login";
import Dashboard from "./views/Dashboard";

const Router = () => {
    return (
        <Switch>
            <Route path="/welcome">
                <Dashboard />
            </Route>
            <Route exact path="/">
                <Login />
            </Route>
        </Switch>
    );
}

export default Router;
