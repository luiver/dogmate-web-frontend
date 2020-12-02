import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MainTemplate from "./template/MainTemplate";
import {Component} from "react/cjs/react.production.min";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import Header from "./header/Header";
import '../index.css'

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false
        }

        this.handleIsLoginCallback = this.handleIsLoginCallback.bind(this);
    }

    handleIsLoginCallback = (data) => {
        this.setState({loggedIn: data});
    }

    render() {
        const {loggedIn} = this.state
        console.log("in App render, loggedIn = " + loggedIn)
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/registration">
                            {loggedIn ? <MainTemplate/> : headerWithContent(<Registration/>)}
                        </Route>
                        <Route path="/">
                            {loggedIn ? <MainTemplate isLogged={loggedIn}/> :
                                headerWithContent(<Login isLogged={loggedIn} loginCallback={this.handleIsLoginCallback}/>)}
                        </Route>
                        <Route path="/login">
                            {loggedIn ? <MainTemplate/> :
                                headerWithContent(<Login isLogged={loggedIn} loginCallback={this.handleIsLoginCallback}/>)}
                        </Route>
                        <Route path="/user-profile">
                            {loggedIn ? <MainTemplate/> :
                                headerWithContent(<Login isLogged={loggedIn} loginCallback={this.handleIsLoginCallback}/>)}
                        </Route>
                        <Route path="/settings">
                            {loggedIn ? <MainTemplate/> :
                                headerWithContent(<Login isLogged={loggedIn} loginCallback={this.handleIsLoginCallback}/>)}
                        </Route>
                        <Route path="/logout">
                            <Login/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

const headerWithContent = (component) => {
    return (
        <div>
            <Header isLoginRef={false}/>
            {component}
        </div>
    );
}
