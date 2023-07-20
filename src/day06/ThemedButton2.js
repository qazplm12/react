import React from 'react';

import ThemeContext from "./ThemeContext";
import Button2 from "./Button2";

// 부모 컴포넌트에서 전달한 데이터가 없어서 props가 비어있음
function ThemedButton2(props) {

    return (
        // Context의 Consumer를 통해서 Context에 저장된 데이터를 가져옴
        <ThemeContext.Consumer>
            {/* 가져온 데이터를 자식 컴포넌트에 전달함 */}
            {value => <Button2 theme={value}/>}
        </ThemeContext.Consumer>
    )
}

export default ThemedButton2;