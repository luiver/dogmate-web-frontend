import React, {Component} from 'react';
import axios from 'axios';

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
            })
            .catch(error => {
                console.log("login error", error);
            })
        event.preventDefault();
    }

    render() {
        return (
            //todo Header here
            <div>
                <h1>Login Page</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />

                    <button type="submit">Sign in</button>
                </form>
            </div>
        );
    }

}