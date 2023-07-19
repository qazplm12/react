import React from "react";
import Children from "./Children";

function Parent(props) {

    return (
        <div>
            <Children value={'부모 컴포넌트 데이터'} />
        </div>
    );
}

export default Parent;
