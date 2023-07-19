import React, {useState} from "react";

// 자식 컴포넌트
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

function LoginControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () =>{
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };

    // 엘리멘트 변수 선언, 실제로는 일반 변수
    let button;

    // 조건부 렌더링 연산, state인 isLoggedIn 의 값이 true, 혹은 false일 경우에 따라서 변수 button에 저장되는 컴포넌트가 변경됨
    if (isLoggedIn) {
        button = <LogoutButton onClick={handleLogoutClick} />;
    } else {
        button = <LoginButton onClick={handleLoginClick} />;
    }

    return (
        <div className={'container mt-4'}>{button}</div>
    )
}

export default LoginControl;