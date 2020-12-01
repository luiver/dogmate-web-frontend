import {Component} from "react";
import './header.css'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.changeIsLogin = this.changeIsLogin.bind(this);
        this.state = {
            isLogIn: true
        };
    }

    changeIsLogin = () => {
        this.setState(prevState => ({ isLogIn: !prevState.isLogIn }));
    }

    render() {
        const { isLogIn } = this.state;
        let avatar;

        if (isLogIn){
            avatar = <UserLogo/>
        }

        return  (
            <div className={"brown-background"}>
                <header>
                    <div className="logo">DOGMATE</div>
                    {avatar}
                </header>
            </div>
        )
    }

}

const UserLogo = props => {
    return (
        <div
            className="main-avatar yellow"
            onClick={props.onClick}
        >
            <span>
                A
            </span>
        </div>
    );
};