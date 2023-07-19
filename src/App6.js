import React from "react";
import List from "./day05/List";
import AttendanceBook from "./day05/AttendanceBook";
import NameForm from "./day05/NameForm";
import RequestForm from "./day05/RequestForm";
import FruitSelect from "./day05/FruitSelect";
import Reservation from "./day05/Reservation";
import Join from "./day05/Join";
import Parent from "./day05/Parent";
import Parent2 from "./day05/Parent2";
import Parent3 from "./day05/Parent3";
import TemperatureInput from "./day05/TemperatureInput";
import Calculator from "./day05/Calculator";

function App6() {
    return (
        <div className="container py-5 my-5">
            {/*<List/>*/}
            {/*<br/>*/}
            {/*<AttendanceBook/>*/}
            {/*<hr/>*/}
            {/*<NameForm/>*/}
            {/*<br/>*/}
            {/*<RequestForm/>*/}
            {/*<br/>*/}
            {/*<FruitSelect/>*/}
            {/*<br/>*/}
            {/*<Reservation />*/}
            {/*<Join/>*/}
            <Parent/>
            <hr/>
            <Parent2/>
            <hr/>
            <Parent3/>
            <hr/>
            <Calculator />
        </div>
    );
}

export default App6;