import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './auth.css'
import Home from "../home/Home";
import Header from "../header/Header";
import userMenu from '../user_menu/userMenu';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            loginErrors: "",
            isLogIn: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        const { email, password } = this.state;

        axios
            .post(
                "http://localhost:8080/login",
                {
                    username: email,
                    password: password
                }, { withCredentials: true })
            .then(response => {
                console.log("res from login", response);
                console.log("auth below")
                console.log(response.headers.authorization.valueOf())
                //todo create cookie for user with jwt
                //todo redirect to homepage
                if (response.status.valueOf() === 200) {
                    this.changeIsLogin();
                }
            })
            .catch(error => {
                console.log("login error", error);
                this.changeErrorMessage()
            })
        event.preventDefault();
    }

    changeIsLogin = () => {
        this.setState(prevState => ({ isLogIn: !prevState.isLogIn }));
    }

    changeErrorMessage = () => {
        return this.setState({
            loginErrors: "Wrong Username or Password!"
        })
    };

    render() {
        const { isLogIn } = this.state;

        if (isLogIn) {
           return <Home />
        }

        return (
            <div>
                <Header/>
                <div className={"outer-box light-blue"}>
                    <div className={"inner-box"}>
                        <h1 className={"brown"}>Sign in</h1>
                        <h4>{this.state.loginErrors}</h4>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                required
                            />
                            <button className={"yellow"} type="submit">Sign in!</button>
                        </form>
                    </div>
                    <span className={"brown"}>Don't have an account? </span>
                    <Link className={"redirect-font-color"} to="/registration">Sign up!</Link>
                </div>
            </div>
        );
    }
}
