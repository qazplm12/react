import React, {useState} from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
    // 로그인 여부를 확인하는 isLoggedIn 변수를 useState를 사용하여 state로 등록
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 클릭 이벤트 발생 시 호출할 함수 생성
    const onClickLogin = () => {
        // setState
        setIsLoggedIn(true);
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className="container">
            {/* 자식 컴포넌트인 Toolbar 컴포넌트를 호출 */}
            {/* isLoggedIn, onClickLogin, onClickLogout 3개의 데이터를 전달 */}
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout} />
            <div className={'p-3'}>로그인 여부 확인하기</div>
        </div>
    );
}

export default LandingPage;