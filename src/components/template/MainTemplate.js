import {Component} from "react";
import '../../index.css'
import Header from "../header/Header";

export default class MainTemplate extends Component {

    constructor(props) {
        super(props);
        this.changeIsLogin = this.changeIsLogin.bind(this);
        this.state = {
            isLogIn: true,
        }

    }

    changeIsLogin = () => {
        this.setState(prevState => ({ isLogIn: !prevState.isLogIn }));
    }

    render() {

        const { isLogIn } = this.state;

        if (isLogIn) {

        }

        return  (
            <div>
                <div className="main-header">
                    <Header isLoginRef={isLogIn}/>
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