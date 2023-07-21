import React from 'react';
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./day07/Home";
import About from "./day07/About";
import ErrorPage from "./day07/ErrorPage";
import Profile1 from "./day07/Profile1";
import Profile2 from "./day07/Profile2";


function App13(props) {

    return (
        <BrowserRouter>
            <Routes>
                {/* Route를 중첩되도록 입력 시 부모 Route 컴포넌트를 기본 주소로 설정할 수 있음 */}
                {/* Route를 중첩했을 경우 자식 Route의 path 값의 시작 글자에 /가 있으면 안됨 */}
                <Route path={'/pages'}>
                    {/* 자식 Route 컴포넌트는 부모 path url + 자신 url 형태로 주소를 사용*/}
                    {/* index 속성은 부모 주소를 자신의 주소로 사용한다는 의미 */}
                    <Route index element={<Home/>}></Route>
                    <Route path={'about'} element={<About/>}></Route>
                    <Route path={'*'} element={<ErrorPage/>}></Route>
                    {/* URL 파라미터 방식으로 데이터 전달 */}
                    <Route path={'profile1/:userName/:age'} element={<Profile1/>}/>
                    {/* 쿼리 스트링 방식으로 데이터 전달, 전통적인 get 방식으로 전달, url에 속성명=값 형태로 전달*/}
                    <Route path={'profile2'} element={<Profile2/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App13;