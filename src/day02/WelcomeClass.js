import React from "react";

// 클래스 컴포넌트
// 클래스 컴포넌트는 생명주기 메소드가 존재함
// 생명주기 메소드를 사용하여 필요한 작업을 진행할 수 있음
class WelcomeClass extends  React.Component{
    // render ()함수를 사용하여 화면을 그려줌
    render(){
        // return 키워드에 JSX 문법 사용하여 화면을 구성함
        return(
            <h1>클래스 컴포넌트, 안녕하세요 {this.props.name} 입니다.</h1>
        )
    }
}

export default WelcomeClass;