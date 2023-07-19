import React, {useEffect, useState} from "react";

function Calculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [calculating, setCalculating] = useState(0);
    const [selected, setSelected] = useState(null);
    const [isNum1, setIsNum1] = useState(true);
    const [result, setResult] = useState(0);
    const [nowResult, setNowResult] = useState(false);

    useEffect(() => {
        setNum1(num1 + num1);
    }, [])

    useEffect(() => {
        setCalculating(Number(num1 + num2));
    }, )

    useEffect(() => {

    }, [calculating])



    const selectedHandler = (e) => {
        setSelected(e.target.textContent);
        setIsNum1(false);
    }
    const numHandler = (e) => {
        isNum1 ? setNum1(num1 + e.target.value) : setNum2(num2 + e.target.value);
        // isNum1 ? setCalculating(Number(num1)) : setCalculating(Number(num2))

        console.log(` num1 : ${num1}`);
        console.log(` num2 : ${num2}`);
        console.log(` isNum1 : ${isNum1}`);
        console.log(` isSelected : ${selected}`);
        console.log(` result : ${result}`);
    };

    const getResult = () => {
        setNowResult(true);
        switch(selected){
            case "+" :
                setResult(Number(num1) + Number(num2));
                break;
            case "-" :
                setResult(Number(num1) - Number(num2));
                break;
            case "*" :
                setResult(Number(num1) * Number(num2));
                break;
            case "/" :
                setResult(Number(num1) / Number(num2));
                break;
            default:
                break;
        }
        setIsNum1(true);
        setNum1("");
        setNum2("");
        setSelected(null);
    };


    return (
        <div className={'row col-2'}>
            <div className={'col-2 d-grid gap-4 p-0'}>
                <div></div>
                <button className={'btn btn-secondary'} type={'button'} onClick={(e) => selectedHandler(e)}>+</button>
                <button className={'btn btn-secondary'} type={'button'} onClick={(e) => selectedHandler(e)}>-</button>
                <button className={'btn btn-secondary'} type={'button'} onClick={(e) => selectedHandler(e)}>*</button>
                <button className={'btn btn-secondary'} type={'button'} onClick={(e) => selectedHandler(e)}>/</button>
            </div>
            <div className={'col-10'}>
                <div className={'mt-5 row text-center'}>
                    <div className={'col-4'}>
                        <button value={1} className={'btn btn-secondary'} type={"button"} onClick={
                            (e) => numHandler(e)
                        }>
                            1
                        </button>
                    </div>
                    <div className={'col-4'}>
                        <button className={'btn btn-secondary'}>
                            2
                        </button>
                    </div>
                    <div className={'col-4'}>
                        3
                    </div>
                </div>
                <div className={'mt-5 row text-center'}>
                    <div className={'col-4'}>
                        4
                    </div>
                    <div className={'col-4'}>
                        5
                    </div>
                    <div className={'col-4'}>
                        6
                    </div>
                </div>
                <div className={'mt-5 row text-center'}>
                    <div className={'col-4'}>
                        7
                    </div>
                    <div className={'col-4'}>
                        8
                    </div>
                    <div className={'col-4'}>
                        9
                    </div>
                </div>
                <div className={'my-2 d-flex justify-content-between'}>
                    <button className={'btn btn-secondary'} type={'button'} onClick={getResult}>
                        =
                    </button>
                    <div className={'text-end'}>
                        {nowResult ? result : calculating}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;