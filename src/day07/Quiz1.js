import React, {useEffect, useState} from 'react';
import axios from "axios";


// 문제 1) axios를 사용하여 회원 정보 목록을 출력하는 페이지 작성
// 문제 2) 동일한 페이지에서 axios를 사용하여 사용자를 추가하는 페이지를 작성

function ListTab() {
    const [usersList, setUsersList] = useState({});

    useEffect(() => {

    }, [<User/>]);

    const handleUpdate = () => {
        axios.get('http://localhost:8080/quiz/getUserList')
            .then(res => {
                setUsersList(res.data.userList);
                console.log(usersList);
            })
            .catch(err => {

            });
    };

    return (
        <div className={'my-5 py-5'}>
            <table className={'table text-center'}>
                <thead>
                <tr>
                    <th>회원 번호</th>
                    <th>회원 ID</th>
                    <th>회원 PW</th>
                    <th>회원명</th>
                    <th>가입일</th>
                </tr>
                </thead>
                <tbody>
                <User userList={usersList}/>
                </tbody>
            </table>
            <button type={"button"} className={'btn btn-primary'} onClick={handleUpdate}>리스트 업데이트</button>
        </div>
    );
}

function User(props) {
    const [usersList, setUsersList] = useState({});

    useEffect(() => {

    }, [usersList]);

    useEffect(() => {
        setUsersList(props.userList)
    },);

    if (usersList.length > 0) {
        return (
            usersList.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{item.userIdx}</td>
                        <td>{item.userId}</td>
                        <td>{item.userPw}</td>
                        <td>{item.userName}</td>
                        <td>{item.userDt}</td>
                    </tr>
                );
            })
        );
    } else {
        return (
            <tr>
                <td colSpan={5}>등록된 사용자가 없습니다.</td>
            </tr>
        );
    }


}

function InsertTab() {
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const [userName, setUserName] = useState("");

    useEffect(() => {

    }, [userId]);
    useEffect(() => {

    }, [userPw]);
    useEffect(() => {

    }, [userName]);


    const handleChange = (e) => {
        switch (e.target.name) {
            case "userId" :
                setUserId(e.target.value);
                break;
            case "userPw" :
                setUserPw(e.target.value);
                break;
            case "userName" :
                setUserName(e.target.value);
                break;
        }
    }

    const handleSubmit = e => {

        // console.log(
        //     `
        //     userId : ${userId}
        //     userPw : ${userPw}
        //     userName : ${userName}
        //     `
        // )

        axios.put('http://localhost:8080/quiz/insertUser', null, {
            params: {
                userId: userId,
                userPw: userPw,
                userName: userName,
            }
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err);
        });

        e.preventDefault();
    };
    return (
        <div className={'col-sm-4 my-5 mx-auto'}>
            <h2>회원 정보 추가</h2>
            <form action="" className={'form-control'} onSubmit={handleSubmit}>
                <label htmlFor="" className={'form-label'}> 회원 ID :
                    <input type="text" id={'userId'} name={'userId'} className={'form-control'}
                           onChange={handleChange}/>
                </label>
                <label htmlFor="" className={'form-label'}> 회원 PW :
                    <input type="password" id={'userPw'} name={'userPw'} className={'form-control'}
                           onChange={handleChange}/>
                </label>
                <label htmlFor="" className={'form-label'}> 회원명 :
                    <input type="text" id={'userName'} name={'userName'} className={'form-control'}
                           onChange={handleChange}/>
                </label>
                <br/>
                <button type={"submit"} className={'btn btn-primary'}>데이터 전송</button>
            </form>
        </div>
    )
}


function Quiz1(props) {

    return (
        <div className={'container'}>
            <ListTab/>
            <InsertTab/>
        </div>
    )
}

export default Quiz1;