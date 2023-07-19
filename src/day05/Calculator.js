import React, {useState} from 'react';
import TemperatureInput from "./TemperatureInput";


// 자식 컴포넌트
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>물이 끓습니다</p>
    }
    return <p>물이 끓지 않습니다.</p>
}

// 섭씨로 변경하는 공식
function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

// 화씨로 변경하는 공식
function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

// 단위 변경
function tryConvert(temperature, convert) {
    // 실수 타입으로 변경
    const input = parseFloat(temperature);
    // 변경된 데이터가 숫자인지 확인
    if (Number.isNaN(input)) {
        return '';
    }
    // 변환된 온도 정보를 저장함
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator(props) {
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('c');

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale('c');
    };

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale('f');
    };

    // 화씨 혹은 섭씨로 단위값 변경
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
        <div>
            {/* 자식 컴포넌트 호출 시 전달하는 데이터의 이름으로 scale, temperature, onTemperatureChange를 사용함*/}
            <TemperatureInput scale={'c'} temperature={celsius} onTemperatureChange={handleCelsiusChange} />
            <TemperatureInput scale={'f'} temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
          <BoilingVerdict celsius={parseFloat(celsius)}/>
        </div>
    );
}

export default Calculator;