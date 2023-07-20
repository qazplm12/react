import React, {useEffect, useState} from 'react';
// 라이브러리 임포트
import axios from "axios";

function AxiosDailyBoxOffice(props) {
    // useSate를 사용하여 화면에 출력할 데이터를 state로 등록 ( json 객체의 내용에 맞춰서 초기화 )
    // boxOffice에 axios로 통신 후 받아온 데이터를 저장
    const [boxOffice, setBoxOffice] = useState([]);

    const loadBoxOffice = () => {
        // axios를 통해서 get 방식으로 비동기 통신
        axios.get('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101')
            // 정상 통신시
            .then(req => {
                // 통신 완료 후 전달받은 데이터 처리
                // 영화진흥원 open API의 일일 박스오피스 정보 중 영화 목록만 가져옴
                const dailyBoxOffice = req.data.boxOfficeResult.dailyBoxOfficeList;
                setBoxOffice(dailyBoxOffice);
            })
            .catch(err => {
                alert('통신 중 오류가 발생했습니다.');
            });
    };

    // useEffect(() => {
    //
    // }, loadBoxOffice());


    return (
        <div>
            <div className="row">
                <div className="col-sm mx-auto">
                    <table className="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th>순위</th>
                            <th>제목</th>
                            <th>개봉일</th>
                            <th>당일 관람객</th>
                            <th>누적 관람객</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            // ES6의 자바스크립트 배열 관련 함수 중 map을 사용하여 배열의 요소를 반복 출력
                            boxOffice.map(item => {
                                return (
                                    <tr key={item.rnum}>
                                        <td>{item.rank}</td>
                                        <td>{item.movieNm}</td>
                                        <td>{item.openDt}</td>
                                        <td>{item.audicnt}</td>
                                        <td>{item.audiAcc}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                    <div className="my-3 d-flex justify-content-end">
                        <button className="btn btn-primary" type={"button"} onClick={loadBoxOffice}>영화 순위 조회</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AxiosDailyBoxOffice;