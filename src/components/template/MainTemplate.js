import {Component} from "react";
import Header from "../header/Header";
import Login from "../auth/Login";
import Home from "../home/Home";
import MainNavigation from "../navigation/MainNavigation";
import AvatarMenu from "../navigation/AvatarMenu";
import '../../index.css'
import './mainTemplate.css'
import Registration from "../auth/Registration";

export default class MainTemplate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogIn: false,
            isAvatarClicked: null
        }
    }

    handleIsLoginCallback = (data) => {
        this.setState({isLogIn: data});
    }

    handleIsAvatarClicked = (data) => {
        this.setState({isAvatarClicked: data});
    }

    render() {
        const doesUserWantToRegister = this.props.doesUserWantToRegister
        const { isLogIn, isAvatarClicked } = this.state;

        return  (
            <div>
                <div className="main-header brown-background">
                    <Header isLoginRef={isLogIn} isAvatarClickedCallback={this.handleIsAvatarClicked}/>
                </div>
                <div className="main-container">
                    <div className="left-menu">
                        {isLogIn && <MainNavigation/>}
                    </div>
                    <div className="content-container">
                        {isLogIn && <Home/>}
                        {!isLogIn && !doesUserWantToRegister && <Login isLogInCallback={this.handleIsLoginCallback} />}
                        {!isLogIn && doesUserWantToRegister && <Registration/>}
                    </div>
                    <div className="right-container">
                        {isAvatarClicked && <AvatarMenu/>}
                    </div>
                </div>
            </div>
        )
    }

}