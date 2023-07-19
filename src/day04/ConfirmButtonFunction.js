import React, {useState} from "react";

function ConfirmButtonFunction(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = (isConfirmed) => {
        setIsConfirmed((prevState) => !prevState);

    }


    return (
        <button type={'button'} className={'btn btn-primary'} onClick={handleConfirm}
                disabled={isConfirmed}>
            {isConfirmed ? '확인됨' : '확인하기'}
        </button>
    )

}

export default ConfirmButtonFunction;

// 문제1) 함수 컴포넌트를 사용하여 사칙연산을 하는 계산기 페이지를 작성하세요