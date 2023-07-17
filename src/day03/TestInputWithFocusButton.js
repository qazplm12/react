import React, {useRef} from "react";

function TestInputWithFocusButton() {
    // useRef를 사용하ㅕㅇ 사용할 태그를 지정, 초기값을 null을 사용하여 빈 태그로 설정함
    const inputBox = useRef(null);

    const onButtonClick = () => {
        inputBox.current.focus();
    }
    return (
        <div className={'container'}>
            <input type={"text"} className={'form-control'}/>
            {/* jsx 문법을 사용하여 useRef에 태그를 지정*/}
            <input type={"text"} className={'form-control'} ref={inputBox} placeholder={'아래 버튼 클릭 시 포커스를 받는 태그'}/>
            <button type={"button"} className={'btn btn-primary'} onClick={onButtonClick}>클릭 시 포커스 이동</button>
        </div>
    )
}

export default TestInputWithFocusButton;