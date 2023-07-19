import React from "react";

// 부모 컴포넌트에서 전달받은 데이터를 화면에 출력
function Children(props) {

    return(
        <div>
            <p>전달 받은 값 : {props.value}</p>
        </div>
    )
}

export default Children;