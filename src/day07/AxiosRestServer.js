import React from 'react';
import axios from "axios";

function AxiosRestServer(props) {

    const sendDataGet = () => {
        axios.get('http://localhost:8080/async/sendDataGet')
            .then(res => {
                if (res.data.result == "success") {
                    console.log("GET방식 비동기 통신 성공")
                    console.log(res.data);
                }
            })
            .catch(err => {
                errorMessage('get', err);
            })
    };
    const sendDataGetParam = () => {
        axios.get('http://localhost:8080/async/sendDataGetParam', {
            params: {idx: 100}
        })
            .then(res => {
                if (res.data.result == "success") {
                    console.log("파라미터가 있는 GET방식 비동기 통신 성공")
                    console.log(res.data);
                }
            })
            .catch(err => {
                errorMessage('get', err);
            })
    };
    const sendDataPost = () => {
        axios.post('http://localhost:8080/async/sendDataPost', null, {
            params: {
                userId: 'testId',
                userPw: 'testPw',
            }
        })
            .then(res => {
                if (res.data.result == "success") {
                    console.log("POST방식 비동기 통신 성공")
                    console.log(res.data);
                }
            })
            .catch(err => {
                errorMessage('post', err);
            });
    };
    const sendDataPut = () => {
        axios.put('http://localhost:8080/async/sendDataPut', null, {
            params: {
                idx: 100,
            }
        })
            .then(res => {
                if (res.data.result == "success") {
                    console.log("PUT방식 비동기 통신 성공")
                    console.log(res.data);
                }
            })
            .catch(err => {
                errorMessage('put', err);
            });

    };
    const sendDataDelete = () => {
        axios.delete('http://localhost:8080/async/sendDataDelete', {
            params: {
                idx: 100,
            }
        })
            .then(res => {
                if (res.data.result == "success") {
                    console.log("DELETE방식 비동기 통신 성공")
                    console.log(res.data);
                }
            })
            .catch(err => {
                errorMessage('delete', err);
            });
    };

    const errorMessage = (type, message) => {
        console.log(`${type} 방식 통신 중 오류가 발생했습니다.`);
        console.log(message);
    }


    return (
        <div className="mt-5 p-5">
            <h1 className={'text-center'}>Axios를 사용한 비동기 통신</h1>
            <div className="row">
                <div className="col-sm-8 mx-auto">
                    <div></div>
                    <div className="my-3 d-flex justify-content-center">
                        <button type={"button"} onClick={sendDataGet} className="btn btn-primary me-3">get 방식</button>
                        <button type={"button"} onClick={sendDataGetParam} className="btn btn-primary me-3">get 방식 파라미터
                            추가
                        </button>
                        <button type={"button"} onClick={sendDataPost} className="btn btn-success me-3">post 방식</button>
                        <button type={"button"} onClick={sendDataPut} className="btn btn-info me-3">put 방식</button>
                        <button type={"button"} onClick={sendDataDelete} className="btn btn-danger">delete 방식</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AxiosRestServer;