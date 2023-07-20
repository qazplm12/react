import React, {useEffect} from 'react';
import axios from "axios";

function AxiosTest(props) {


    useEffect(() => {
        axios.get('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101')
            .then(req => {
                alert('통신성공');
                console.log(req)

                const list = req.data.boxOfficeResult.dailyBoxOfficeList;

                for (let i = 0; i < list.lenght; i++) {
                    let str = `순번${list[i].num}`;
                    str += `순위 : ${list[i].rank}`;
                    str += `제목 : ${list[i].movieNm}`;
                    str += `개봉일 : ${list[i].openDt}`;
                    str += `관람객 : ${list[i].audioCnt}`;
                    console.log(`${str}\n`)
                }
            }).catch(err => {
                alert('통신실패');
                console.log(err);
            }
        );
    }, []);
    return (
        <div></div>
    );
}

export default AxiosTest;