import React from 'react';
import {Link} from "react-router-dom";

function About(props) {

    return (
        <div>
            <h1>About 페이지</h1>
            <p>리액트 라우터로 이동하여 접속한 페이지</p>

            <Link to={'/pages'}>홈으로</Link>
        </div>
    );
}

export default About;