import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import MainTemplate from "./template/MainTemplate";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import Header from "./header/Header";
import '../index.css'

export default class App extends React.Component {

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
                            {console.log("i am on login page")}
                            {/*{loggedIn ? <MainTemplate/> :*/}
                            {/*    headerWithContent(<Login isLogged={loggedIn} loginCallback={this.handleIsLoginCallback}/>)}*/}
                            {headerWithContent(<Login isLogged={loggedIn} loginCallback={this.handleIsLoginCallback}/>)}

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
                            {/*<Redirect to={"/login"}/>*/}
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
