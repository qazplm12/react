import React, {useState} from "react";


// 문제 1) 회원가입 페이지 작성
// id, pw, name, e-mail, phoneNumber, gender 정보를 입력받고 확인 버튼 클릭시 console이나 alert으로 결과를 출력
function Join(props) {
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userGender, setUserGender] = useState("남성");

    const handleSubmit = e => {
        alert(`
            userId : ${userId}
            userPw : ${userPw}
            userName : ${userName}
            userEmail : ${userEmail}
            userPhone : ${userPhone}
            userGender : ${userGender}
        `)
        e.preventDefault();
    }

    const handleChange = e => {
        switch (e.target.id) {
            case "userId":
                setUserId(e.target.value);
                break;
            case "userPw":
                setUserPw(e.target.value);
                break;
            case "userName":
                setUserName(e.target.value);
                break;
            case "userEmail":
                setUserEmail(e.target.value);
                break;
            case "userPhone":
                setUserPhone(e.target.value);
                break;
            case "userGender":
                setUserGender(e.target.value);
                break;
        }
    };

    return (
        <form action="" className="form-control row" onSubmit={handleSubmit}>
            <label htmlFor="userId" className={'form-label'}>아이디
                <input type="text" id={'userId'} className={'form-control'} value={userId} onChange={handleChange}/>
            </label>

            <label htmlFor="userPw" className={'form-label'}>비밀번호
                <input type="password" id={'userPw'} className={'form-control'} value={userPw} onChange={handleChange}/>
            </label>

            <label htmlFor="userName" className={'form-label'}>이름
                <input type="text" id={'userName'} className={'form-control'} value={userName} onChange={handleChange}/>
            </label>

            <label htmlFor="userEmail" className={'form-label'}>이메일
                <input type="text" id={'userEmail'} className={'form-control'} value={userEmail}
                       onChange={handleChange}/>
            </label>

            <label htmlFor="userPhone" className={'form-label'}>전화번호
                <input type="text" id={'userPhone'} className={'form-control'} value={userPhone}
                       onChange={handleChange}/>
            </label>
            <p>성별</p>
            <div className={'d-flex'}>
                <div className={'form-check me-3'}>
                    <label htmlFor="userGenderM" className={'form-check-label'}>남성</label>
                    <input type="radio" id={'userGender'} name={'userGender'} className={'form-check-input'}
                           value={"남성"} checked={true}
                           onChange={handleChange}/>
                </div>
                <div className={'form-check'}>
                    <label htmlFor="userGenderF" className={'form-check-label'}>여성</label>
                    <input type="radio" id={'userGender'} name={'userGender'} className={'form-check-input'}
                           value={"여성"}
                           onChange={handleChange}/>
                </div>
            </div>
            <div className={'d-flex justify-content-end'}>
                <button type={"submit"} className={'btn btn-primary'}>확인</button>
            </div>
        </form>
    )
}

export default Join;
