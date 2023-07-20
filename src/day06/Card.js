import React from 'react';



function Card(props) {
    console.log(props.children[0].props.children);
    // 전개 연산법을 사용하여 부모가 전달한 객체인 props의 내용을 지역 변수로 받음
    // title, backgroundColor는 부모 컴포넌트가 자식 컴포넌트의 props에 속성명을 지정하여 데이터 전달
    // children은 원래 자식 컴포넌트의 props에 존재하며, children에 태그를 추가해서 전달
    const {title, backgroundColor, children} = props;

    return (
        <div style={{
            margin: 8,
            padding: 8,
            borderRadius: 8,
            // || 를 사용하면 || 연산자 왼쪽에 데이터가 있으면 (true) 해당 데이터 사용,
            // 없으면 || 연산자 오른쪽에 있는 데이터를 기본값으로 사용함
            backgroundColor: backgroundColor || '#fff'
        }}>
            {title && <h1>{title}</h1>}
            {children}
        </div>
    )
}

export default Card;