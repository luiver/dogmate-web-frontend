import {Component} from "react";

export default class MainTemplate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            password_confirmation: "",
            registration_errors: ""
        }


    }
    render() {
        return  (
            <div>
                <div className="main-header">
                    <Header/>
                </div>
                <div className="main-container">
                    <div className="left-menu">

                    </div>
                    <div className="content-container">

                    </div>
                    <div className="right-container">

                    </div>
                </div>
            </div>

        )

    }

}