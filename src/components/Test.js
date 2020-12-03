import React, { useContext, createContext, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import Header from "./header/Header";
import MainTemplate from "./template/MainTemplate";
import Login from "./auth/Login";
import Registration from "./auth/Registration";
import AuthService from "../services/AuthService";
import AvatarMenu from "./navigation/AvatarMenu";
import MainNavigation from "./navigation/MainNavigation";
import Home from "./home/Home";

export default function Test() {
    return (
        <ProvideAuth>
            <Router>
                <div>
                    <NewHeader />
                    <Switch>
                        <Route path="/registration">
                            <Registration />
                        </Route>
                        <Route path="/public">
                            <PublicPage />
                        </Route>
                        <Route path="/login">
                            <LoginPage />
                            {/*<Login/>*/}
                        </Route>
                        <PrivateRoute path="/protected">
                            <ProtectedPage />
                        </PrivateRoute>
                        <PrivateRoute path="/home">
                            <NewTemplate />
                        </PrivateRoute>

                    </Switch>
                </div>
            </Router>
        </ProvideAuth>
    );
}

const fakeAuth = {
    isAuthenticated: false,
    signin(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */
const authContext = createContext();

function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}

function useAuth() {
    return useContext(authContext);
}

function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isAvatarClicked, setIsAvatarClicked] = useState(false);
    const logIn = (email, password) => {
        AuthService.login(email, password);

    }

    const signin = cb => {
        return fakeAuth.signin(() => {
            setUser("user");
            cb();
        });
    };

    const signout = cb => {
        return fakeAuth.signout(() => {
            AuthService.logout();
            setUser(null);
            cb();
        });
    };

    const clickAvatar = () => {
        console.log("isAvatar clicked")
        console.log(isAvatarClicked)
        return () => {
            setIsAvatarClicked(!isAvatarClicked)
        };
    }

    return {
        user,
        isAvatarClicked,
        clickAvatar,
        signin,
        signout
    };
}

function NewHeader() {
    let history = useHistory();
    let auth = useAuth();
    return auth.user ? (
        <header className={"brown-background"}>
            <div className="logo">
                <Link to={"/home"}>
                    DOGMATE
                </Link>
            </div>
            {/*<UserLogo onClick={this.changeIsAvatarClicked.bind(this)}/>*/}
            <button
                onClick={() => {
                    auth.signout(() => history.push("/login"));
                }}
            >
                Sign out
            </button>
            <UserLogo onClick={auth.clickAvatar()}/>
        </header>
    ) : (
        <header className={"brown-background"}>
            <div className="logo">
                <Link to={"/home"}>
                    DOGMATE
                </Link>
            </div>
        </header>
    );
}

function avatarClicked() {
    console.log("avatar is clicked");

    return ;

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
// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
    let auth = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

function PublicPage() {
    return <h3>Public</h3>;
}

function ProtectedPage() {
    return <h3>Protected</h3>;
}


// function handleChange(event) {
//     setState({
//         [event.target.name]: event.target.value
//     });
// }

function HandleSubmit(event)  {
    console.log("handlesubmit");
    event.preventDefault();
}

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    let history = useHistory();
    let location = useLocation();
    let auth = useAuth();
    console.log("location " + location);
    console.log("locationstate " +location.state)

    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        if (email === "" || password === "") {
            setError("Fields are required");
            return;
        }
        auth.signin(() => {
            history.replace(from);
        });
    };

    return (
        <div>
            <p>You must log in to view the page at {from.pathname}</p>
            <button onClick={login}>Log in</button>

            <div className={"wrapper-container"}>
                <div className={"outer-box light-blue"}>
                    <div className={"inner-box"}>
                        <h1 className={"brown"}>Sign in</h1>
                        <h4>{error}</h4>
                        <form onSubmit={HandleSubmit}>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                            <button className={"yellow"} type="submit" onClick={login}>Sign in!</button>
                        </form>
                        <div className={"additional-info"}>
                            <span className={"brown"}>Don't have an account? &nbsp;</span>
                            <Link className={"redirect-font-color"} to="/registration">Sign up!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function NewTemplate() {
    let auth = useAuth();
    return (
        <div>
            <div className="main-container">
                <div className="left-menu">
                    {<MainNavigation/>}
                </div>
                <div className="content-container">
                    {<Home/>}
                </div>
                <div className="right-container">
                    {auth.isAvatarClicked && <AvatarMenu/>}
                </div>
            </div>
        </div>
    )

}
