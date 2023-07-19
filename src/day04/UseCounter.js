import React, {useState} from "react";

// 커스텀 훅 생성
function UseCounter(initValue) {
    // useSatate를 사용하여 변수 count를 state로 설정
    const [count, setCount] = useState(initValue);

    const incrementCount = () => setCount((count) => count + 1);

    const decrementCount = () => setCount((count) => Math.max( count - 1, 0));

    // 배열로 반환, 0번 index는 현재 count값, 1번 index는 count up, 2번 index는 count down
    return [count, incrementCount, decrementCount];
}

export default UseCounter;