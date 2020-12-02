import {Component} from "react";
import Header from "../header/Header";
import Login from "../auth/Login";
import '../../index.css'
import './mainTemplate.css'
import Registration from "../auth/Registration";
import MainTemplate from "./MainTemplate";

export default class LoggedOutTemplate extends Component {

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
        const doesUserWantToRegister = this.props.doesUserWantToRegister
        // const {isLogIn} = this.state;
        // this.props.isUserLogedIn(isLogIn);

        const {isLogIn} = this.state;
        if (isLogIn) {
            this.props.isUserLogedIn(isLogIn);
            return <MainTemplate/>
        }

        return  (

            <div>
                <div className="main-header brown-background">
                    <Header isLoginRef={false}/>
                </div>
                <div className="main-container">
                    <div className="content-container">
                        {!doesUserWantToRegister && <Login isLogInCallback={this.handleIsLoginCallback} />}
                        {/*{!doesUserWantToRegister && <Login />}*/}
                        {doesUserWantToRegister && <Registration/>}
                    </div>
                </div>
            </div>
        )
    }

}