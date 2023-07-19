import React from "react";
import Accommodate from "./day04/Accommodate";
import ToggleClass from "./day04/ToggleClass";
import ToggleFunction from "./day04/ToggleFunction";
import MyButton from "./day04/MyButton";
import ConfirmButtonFunction from "./day04/ConfirmButtonFunction";
import ConfirmButtonClass from "./day04/ConfirmButtonClass";
import Calculator from "./Calculator/Calculator";
import Greeting from "./day04/Greeting";
import LoginControl from "./day04/LoginControl";
import MailBox from "./day04/MailBox";
import Counter from "./day04/Counter";
import LoginControl2 from "./day04/LoginControl2";
import MainPage from "./day04/MainPage";
import Toolbar from "./day04/Toolbar";
import LandingPage from "./day04/LandingPage";

function App5() {
    return (
        <div className={'container'}>
            <Accommodate/>

            <hr/>

            <ToggleClass/>
            <br/>
            <ToggleFunction/>
            <br/>
            <MyButton/>

            <hr/>
            <ConfirmButtonClass/>
            <ConfirmButtonFunction/>
            <hr/>
            <Greeting isLoggedIn={true}/>
            <hr/>
            <LoginControl/>
            <hr/>
            <MailBox unreadMessages={0}/>
            <br/>
            <MailBox unreadMessages={10}/>
            <hr/>
            <Counter/>
            <hr/>
            <LoginControl2/>
            <hr/>
            <MainPage/>
                <hr/>
            <LandingPage />
            {/*<Calculator />*/}
                <div className={'py-5 my-5'}/>
        </div>
    )
}

export default App5;