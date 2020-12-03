import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import MainTemplate from "./template/MainTemplate";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import Header from "./header/Header";
import Home from "./home/Home";
import '../index.css'
import AuthService from "../services/AuthService";

export default class App extends Component {

    constructor(props) {
        super(props);

        this.logOut = this.logOut.bind(this);

        this.state = {
            token: undefined,
            user: undefined
        }
    }

    logOut() {
        AuthService.prototype.logout();
    }

    componentDidMount() {
        const userToken = AuthService.getUserToken();
        const user = AuthService.getCurrentUser();

        if (userToken) {
            this.setState({
                token: userToken,
                user: user
            });
        }
    }

    render() {
        const {token, user} = this.state
        console.log("in App render, token = " + token)
        console.log("user: " + user);
        return (
            <div>
                {token ? (
                    <Header loggedInUser={user}/>
                ) : (
                    <Header/>
                )}
                <div className="switch-container">

                    <Switch>
                        <Route exact path="/registration" >
                            {token ? <Redirect to={"/"}/>  : <Registration/>}
                        </Route>
                        <Route exact path="/login">
                            {token ? <Redirect to={"/"}/> : <Login/>}
                        </Route>
                        <Route path="/user-profile"/>
                        <Route path="/settings"/>
                        <Route path="/logout"/>
                        <Route exact path="/" >
                            {token ? <MainTemplate/> : <Redirect to={"/login"}/>}
                        </Route>
                    </Switch>

                </div>
            </div>
        );
    }
}

const headerWithContent = (component, user) => {
    return (
        <div>
            <Header loggedInUser={user}/>
            {component}
        </div>
    );
}
