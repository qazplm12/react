import React from "react";

function List() {
    const numbers = [1, 2, 3, 4, 5];

    // 리스트를 통해서 엘리먼트를 반환할 경우 반드시 각각의 엘리먼트를 구분할 수 있도록 key 속성값을 부여해야 함
    // 엘리먼트를 구분할 수 있는 고유한 값이기만 하면 됨
    // 리스트가 2개 이상일 경우 key가 같아도 상관 없음
    const listItems1 = numbers.map((item, index) => {
        // map() 함수의 두번째 매개변수인 배열의 현재 index 값을 key로 사용
        return <li key={'key' + index}>{item}</li>
    });

    const listItems2 = numbers.map((item) => {
        // map() 함수의 두번째 매개변수가 없기 때문에 첫번째 매개변수를 key로 사용함
        return <li key={item.toString()}>{item}</li>
    });

    console.log(listItems1);

    numbers.map((item, index, arr) => {
        console.log(`현재 index : ${index}, 값 : ${item}`);
        console.log(`전체 배열 : ${arr}`);
    });
    return (
        <div>
            <h3>그냥 목록 만들기</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
            <br/>
            <h3>리스트와 map() 함수로 목록 만들기</h3>
            <ul>
                {listItems1}
                {listItems2}
            </ul>
        </div>
    )
}

export default List;