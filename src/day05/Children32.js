import React, {useState} from "react";

function Children32(props) {
    const [inputValue, setInputValue] = useState("");

    const changeInput = e => setInputValue(e.target.value);

    const sendData = e => {
        props.func(inputValue);
    };

    return(
        <div className="my-3">
            <h3>자식 컴포넌트</h3>
            <input type="text" className="form-control" value={inputValue} onChange={changeInput}/>
            <button type={"button"} className={'btn btn-primary'} onClick={sendData}>데이터 전달</button>
        </div>
    )
}

export default Children32;