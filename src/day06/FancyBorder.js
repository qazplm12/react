import React from 'react';

function FancyBorder(props) {

    return (
        // 부모 컴포넌트에서 전달한 html 태그를 출력하고자 할 경우 props.children으로 출력할 수 있음
        <div className={"border border-2 m-3 p-3 FancyBorder FancyBorder-" + props.color}>
            <h4 className={'mb-3'}>자식 컴포넌트 영역</h4>
            <div className={'border border-2 p-3'}>
                <h5>props.children으로 물려받은 영역</h5>
                {props.children}
            </div>
        </div>
    );
}

export default FancyBorder;