import React,{useState} from 'react';

function SetStateFunction() {
    // hooks 중 useState를 사용함
    // 함수 컴포넌트에서는 state의 값을 변경하고자 할 경우 반드시 useState를 사용해야 함
    let [stateString, setStateString] = useState('click');

    function StateChange(e) {
        // 직접 수정이기 때문에 화면 update가 되지않음
        console.log(`원본 : ${stateString}`);
        stateString = 'useState로 수정 클릭';
        console.log(`수정 : ${stateString}`);
        e.preventDefault();
    }

    return(
        <div>
            {/* jsx 문법에서 문자열만 {}없이 사용 가능, {} 사용 시 자바스크립트 코드임*/}
            {/* jsx 문법에서 css 속성 사용 시 '-' 기호를 생략하고 카멜명명법 사용 */}
            {/* jsx 문법에서 클릭 이벤트가 onclick -> onClick으로 변경*/}
            <button style={{marginRight: '20px'}} onClick={(e) => StateChange(e)}>state 직접 수정</button>
            <button onClick={() => setStateString('클릭')}>setState로 변경</button>
            <br/>
            [state 변경하기] StateString : {stateString}
        </div>
    )
}

export default SetStateFunction;