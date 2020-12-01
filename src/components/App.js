import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./auth/Login";
import Registration from "./auth/Registration";

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/registration">
                        <Registration/>
                    </Route>
                    <Route path="/">
                        <Login/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
