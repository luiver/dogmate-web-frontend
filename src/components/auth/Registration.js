import React, {Component} from "react";
import axios from "axios";

export default class Registration extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            password_confirmation: "",
            registration_errors: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
                [event.target.name]: event.target.value
            }
        );
    }

    handleSubmit(event) {
        axios.post("http://localhost:8080/api/v1/users", {
                user: {
                    email: this.state.email,
                    password: this.state.password,
                }
            },
            {withCredentials: true}
        )
            .then(response => {
                console.log("registration res", response);
            }).catch(error => {
            console.log("registration error", error)
        })
        console.log("form submitted");
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required>
                    </input>

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required>
                    </input>

                    <input
                        type="password"
                        name="password_confirmation"
                        placeholder="Password confirmation"
                        value={this.state.password_confirmation}
                        onChange={this.handleChange}
                        required>
                    </input>

                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}
