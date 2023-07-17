import React from 'react';
import WelcomeFunc from "./day02/WelcomeFunc";
import WelcomeClass from "./day02/WelcomeClass";
import Comment from "./day02/Comment";
import Comment2 from "./day02/Comment2";
import ReplyList from "./day02/ReplyList";
import BootstrapCDN from "./day02/BootstrapCDN";
import BootstrapReact from "./day02/BootstrapReact";
import BasicPage from "./day02/BasicPage";

const author ={
    avatarUri:  'https://static.wikia.nocookie.net/pokemon/images/2/29/%EB%8C%80%EB%82%9C%ED%88%AC%EC%96%BC%ED%8B%B0%EB%B0%8B_%ED%94%BC%EC%B9%B4%EC%B8%84.png/revision/latest?cb=20180727121803&path-prefix=ko',
    name: '피카츄'
}

function App2() {
    return(
        <div>
            <BasicPage />
            {/*<h1>함수 컴포넌트 사용</h1>*/}
            {/*<WelcomeFunc name={'리액트'}/>*/}
            {/*<hr/>*/}
            {/*<h1>클래스 컴포넌트 사용</h1>*/}
            {/*<WelcomeClass name={'리액트'}/>*/}

            {/*<hr/>*/}
            {/*/!* 자식 컴포넌트 Comment 호출*!/*/}
            {/*/!* 속성 호출*!/*/}
            {/*<Comment author={author} text={'아이유 이미지 사용'} date={new Date()} />*/}
            {/*<Comment2 author={author} text={'컴포넌트 추출 해보가'} date={new Date()} />*/}

            {/*<br/>*/}
            {/*<hr/>*/}
            {/*<br/>*/}
            {/*<ReplyList />*/}

            {/*<hr/>*/}

            {/*<BootstrapCDN />*/}

            {/*<br/>*/}

            {/*<BootstrapReact />*/}
        </div>
    )
}


export default App2