import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MainTemplate from "./template/MainTemplate";
import LoggedOutTemplate from "./template/LoggedOutTemplate";

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLogIn: false,
        }
    }

    handleIsLoginCallback = (data) => {
        this.setState({isLogIn: data});
    }

    render() {
        const {isLogIn} = this.state

        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/registration">
                            {/*<Registration/>*/}
                            <LoggedOutTemplate doesUserWantToRegister={true}/>
                        </Route>
                        {/*<Route path="/">*/}
                        {/*    <Login/>*/}
                        {/*</Route>*/}
                        <Route path="/">
                            {/*<MainTemplate/>*/}
                            {!isLogIn && <LoggedOutTemplate doesUserWantToRegister={false} isUserLogedIn={this.handleIsLoginCallback}/>}
                            {isLogIn && <MainTemplate/>}
                        </Route>
                        <Route path="/login">
                            <LoggedOutTemplate doesUserWantToRegister={false} isUserLogedIn={this.handleIsLoginCallback}/>
                        </Route>
                        <Route path="/user-profile">
                            {/*<Registration/>*/}
                            <MainTemplate/>
                        </Route>
                        <Route path="/settings">
                            {/*<Registration/>*/}
                            <MainTemplate />
                        </Route>
                        <Route path="/logout">
                            {/*<Registration/>*/}
                            <MainTemplate/>
                        </Route>



                    </Switch>
                </div>
            </Router>
        );
    }


}
