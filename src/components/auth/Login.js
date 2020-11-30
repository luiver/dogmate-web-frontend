import React, {Component} from 'react';
import axios from 'axios';
import './login.css'

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            loginErrors: ""
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
        const {email, password } = this.state;

        axios
            .post(
                "http://localhost:8080/login",
                {
                    username: email,
                    password: password
                }
                // {
                //     withCredentials: true
                // }
            )
            .then(response => {
                console.log("res from login", response);
                console.log("auth below")
                console.log(response.headers.authorization.valueOf())
            })
            .catch(error => {
                console.log("login error", error);
                this.changeErrorMessage()
            })
        event.preventDefault();
    }

    changeErrorMessage = () => {
        const { loginErrors } = this.state;
        return this.setState({
            loginErrors: loginErrors + "Wrong Username or Password!"
        })
    };

    render() {
        return (
            //todo Header here

            <div className={"login-outer-box light-blue"}>
                <div className={"login-inner-box"}>
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
                <a className={"redirect"} href={"/register"}>Sign up!</a>
            </div>
        );
    }

}