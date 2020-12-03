import {Component} from "react";
import Header from "../header/Header";
import Home from "../home/Home";
import MainNavigation from "../navigation/MainNavigation";
import AvatarMenu from "../navigation/AvatarMenu";
import '../../index.css'
import './mainTemplate.css'
import Test from "../Test";

export default class MainTemplate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //isAvatarClicked: this.props.isAvatarClicked
        }
    }

    // handleIsAvatarClicked = (data) => {
    //     this.setState({isAvatarClicked: data});
    // }

    render() {
        const {isAvatarClicked} = this.state;
        let click = this.context.isAvatarClicked;
        console.log("click")
        console.log(click)
        return (
            <div>
                {/*<div className="main-header brown-background">*/}
                {/*    <Header isLoginRef={true} isAvatarClickedCallback={this.handleIsAvatarClicked}/>*/}
                {/*</div>*/}
                <div className="main-container">
                    <div className="left-menu">
                        {<MainNavigation/>}
                    </div>
                    <div className="content-container">
                        {<Home/>}
                    </div>
                    <div className="right-container">
                        {click && <AvatarMenu/>}
                    </div>
                </div>
            </div>
        )
    }
}
