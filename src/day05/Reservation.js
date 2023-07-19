import React, {useState} from "react";

function Reservation(props) {
    // form 태그에서 사용자 입력을 받는input 태그가 2개 이므로 상태 관리를 위한 state로 설정된 변수도 2개
    const [haveBreakfast, setHaveBreakfast] = useState(true);
    const [numberOfGuest, setNumberOfGuest] = useState(2);

    // submit 이벤트 발생 시 실행할 함수
    const handleSubmit = e => {
        alert(`아침식사 여부 : ${haveBreakfast}, 방문객 수 : ${numberOfGuest}`);
        e.preventDefault()
    };

    return (
        <form action="" className="form-control" onSubmit={handleSubmit}>
            <label htmlFor="chk" className="form-label">아침식사 여부
                {/* checkbox로 동작하기 때문에 해당 태그가 선택되었는지 확인하기 위한 checked 속성에 state로 관리되는 변수를 대입함 */}
                {/* checkbox의 값이 변경이 있을 경우 onchange 이벤트에 직접 콜백함수를 입력하여 처리 */}
                <input type="checkbox" checked={haveBreakfast} id={'chk'} className={'form-check-input ms-2'}
                    onChange={e=> {setHaveBreakfast(e.target.checked)}}/>
            </label>
            <br/>
            <label htmlFor="count" className="form-label">방문객 수
                <input type="number" value={numberOfGuest} id={'count'} className={'form-control'}
                    onChange={e=> {setNumberOfGuest(Number(e.target.value))}}/>
            </label>
            <button type={"submit"} className="btn btn-primary ms-2">확인</button>
        </form>
    )
}

export default Reservation;