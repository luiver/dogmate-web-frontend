import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MainTemplate from "./template/MainTemplate";

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/registration">
                        {/*<Registration/>*/}
                        <MainTemplate doesUserWantToRegister={true}/>
                    </Route>
                    {/*<Route path="/">*/}
                    {/*    <Login/>*/}
                    {/*</Route>*/}
                    <Route path="/">
                       <MainTemplate/>
                    </Route>
                    <Route path="/login">
                        <MainTemplate doesUserWantToRegister={false}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
