import React from "react";
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";


/* 부모 컴포넌트에서 전달받은 데이터가 props에 저장됨*/
// props는 objecvt 타입임

function FormatDate(dt) {
    return dt.toLocaleString();
}

function Comment2(props) {
    return (
        <div className={'comment'}>
            {/* 컴포넌트 추출*/}
            {/* 컴포넌트 추출을 하여 간소화된 형태의 태그로 UI를 구성할 수 있음*/}
            {/* 기능 단위, 재사용이 가능한 형태로 추출하는 것이 좋음*/}
            <UserInfo userData={props.author}/>
            <div className={'comment-text'}>{props.text}</div>

            {/* formatDate() 함수를 실행 */}
            <div className={'comment-date'}>{FormatDate(props.date)}</div>

        </div>
    );
}

export default Comment2;