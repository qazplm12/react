import React from 'react';
import WelcomeDialog from "./day06/WelcomeDialog";
import SplitPane from "./day06/SplitPane";
import Contacts from "./day06/Contacts";
import Chat from "./day06/Chat";
import WelcomeDialog2 from "./day06/WelcomeDialog2";
import SignUpDialog from "./day06/SignUpDialog";
import ProfileCard from "./day06/ProfileCard";
import Toolbar from "./day06/Toolbar";

function App7(props) {
    return (
        <div className="container my-5 py-5">
            <WelcomeDialog />
            <br/>
            {/* 부모 컴포넌트인 App7에서 자식 컴포넌트인 SplitPane을 호출*/}
            {/* 자식 컴포넌트 호출 시 속성 left, right에 다른 자식 컴포넌트를 전달함*/}
            <SplitPane left={<Contacts />} right={<Chat/>} />
            <WelcomeDialog2 />
            <SignUpDialog />
            <ProfileCard />
            <hr/>
            {/* 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하면서 호출*/}
            <Toolbar theme={'dark'} />
        </div>
    )
}

export default App7;