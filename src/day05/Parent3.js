import React, {useState} from "react";
import Children31 from "./Children31";
import Children32 from "./Children32";

function Parent3(props) {
    const [data1, setData1] = useState('');
    const [data2, setData2] = useState('');

    const inputChange1 = e => setData1(e.target.value);

    // 일반 함수
    const parentFunc1 = () => {
        alert('부모 컴포넌트에서 실행하는 알림창')
    };
    let child1 = <Children31 data={data1} func={parentFunc1}/>;
    let child2 = <Children32 data={data2} func={setData2}/>;

    return (
        <div className={'row my-4 '}>
            <div className="col-sm border-2 rounded rounded-3 p-3">
                <h2>Parent3 파일</h2>
                <div className="my-3">
                    <input type="text" className={'form-control'} value={data1} onChange={inputChange1}/>
                    {/* 자식 컴포넌트로 함수 전달 시 일반 함수를 전달함*/}
                    {child1}
                </div>
            </div>
            <div className="col-sm border-2 rounded rounded-3 p-3">
                <div className={'my-3'}>
                    <h3>자식 컴포넌트에서 전달된 데이터 : <br/>{data2}</h3>
                    {/* 자식 컴포넌트로 함수 전달 시 state 값을 변경하는 setState 함수를 전달함*/}
                    {child2}
                </div>
            </div>
        </div>
    )
}

export default Parent3;