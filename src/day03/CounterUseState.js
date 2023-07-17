import React, {useState} from 'react';

function CounterUseState() {
    // useState()로 hook을 사용
    // 지정된 변수인 count는 읽기 전용, count 값을 변경하는 setCount()함수 선언
    const [ count, setCount ] = useState(0);

    return(
        <div className={'container'}>
            <p>총 {count}번 클릭했습니다.</p>
            <button type={'button'} className={'btn btn-primary'} onClick={() =>{
                // setCount()를 실행하여 useState로 관리되고 있는 변수 count의 값을 변경 요청
                // useState()는 비동기 방식으로 동작하기 때문에 화면에 표시되는 값과 console.log()의 값이 다르게 출력됨
                setCount(count + 1);
                console.log(`useState() count : ${count}`);
            }}>클릭</button>
        </div>
    )
}

export default  CounterUseState;