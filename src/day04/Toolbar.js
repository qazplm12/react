import React from "react";

function Toolbar(props) {
    // 부모 컴포넌트에서 전달받은 데이터를 전개 연산법을 통하여 각각의 변수에 저장
    const {isLoggedIn, onClickLogin, onClickLogout} = props;

    // 자식 컴포넌트인 Toolbar 컴포넌트의 UI 생성
    return (
        <div className="container d-flex border rounded-3 p-4">
            {/* inline if 방식으로 화면에 출력*/}
            {
                isLoggedIn &&
                <span className={'me-3'}>환영합니다.</span>
            }
            {/* inline if ~ else 방식으로 화면에 출력 */}
            {
                isLoggedIn
                    // 클릭 이벤트 발생 시 부모 컴포넌트가 전달해 준 데이터 중 onClickLogin, onClickLogout 함수를 실행
                    // 부모 컴포넌트에 있는 onClickLogin, onClickLogout 함수가 실행됨
                    ? (<button type={'button'} className={'btn btn-primary'} onClick={onClickLogout}>로그아웃</button>)
                    : (<button type={'button'} className={'btn btn-primary'} onClick={onClickLogin}>로그인</button>)
            }
        </div>
    )
}

export default Toolbar;