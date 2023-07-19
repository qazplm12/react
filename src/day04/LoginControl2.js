import React, {useState} from "react";
import Greeting from "./Greeting";

function LoginButton(props) {
    return (
        <button type={'button'} className={'btn btn-primary'} onClick={props.onClick}>로그인</button>
    );
}

function LogoutButton(props) {
    return (
        <button type={'button'} className={'btn btn-primary'} onClick={props.onClick}>로그아웃</button>
    );
}
function LoginControl2(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }
    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    return(
        <div className="container">
            <Greeting isLoggedIn={isLoggedIn} />
            {
                isLoggedIn
                ? <LogoutButton onClick={handleLogoutClick} />
                : <LoginButton onClick={handleLoginClick} />
            }
        </div>
    )
}

export default LoginControl2;
