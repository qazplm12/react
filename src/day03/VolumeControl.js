import React, {useEffect, useState} from 'react';

function VolumeControl() {
    // useState를 사용하여 지정된 state 변수의 값을 변경할 수 있도록 지정
    const [volume, setVolume] = useState(0);

    useEffect(() =>{
        setVolume(5);
    }, []);

    useEffect(() =>{

    }, [volume]);

    return(
        <div className={'container'}>
            <p>현재 볼륨 : {volume}</p>
            <div className={'col-1 d-grid gap-2'}>
                <button type={'button'} className={'btn btn-primary'} onClick={()=>{
                    if(volume < 10){
                        setVolume(volume + 1);
                    }
                }}>볼륨 업</button>
                <button type={'button'} className={'btn btn-primary'} onClick={()=>{
                    if(volume > 0){
                        setVolume(volume - 1);
                    }
                }}>볼륨 다운</button>
            </div>
        </div>
    )
}

export default VolumeControl;