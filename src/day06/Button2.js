import React from 'react';

function Button2(props) {

    return (
        <button type={"button"} className={`btn btn-${props.theme}`}
                onClick={() => alert(`사용한 테마 : ${props.theme}`)}>{props.theme}테마 버튼</button>
    )
}

export default Button2;