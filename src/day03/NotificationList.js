import React from 'react';
import Notification from "./Notification";


// 화면에 출력할 메시지
const reservedNotifications = [
    {message: '안녕하세요. 메시지 테스트입니다.', key: 1},
    {message: '두번째 메시지 입니다.', key: 2},
    {message: '세번째 메시지 입니다.', key: 3},
];

// 자바스크립트의 타이머 타이머 값을 저장하기 위한변수(전역 변수)
let timer;

// 클래스 컴포넌트로 생성
class NotificationList extends React.Component {

    constructor(props) {
        super(props);

        // 리액트 컴포넌트 상태 객체인 state 선언
        this.state = {
            // state로 사용할 변수(배열) 선언
            notifications: [],
        }
    }

    // 자동 컴포넌트가 mount 된 후 자동으로 실행되는 메소드
    componentDidMount() {
        // state 객체가 가지고 있는 데이터를 = 기호 왼쪽에 있는 변수에 대입
        // object 타입의 key와 동일한 이름의 변수에 값 대입
        // 지역변수 notifications 생성
        const {notifications} = this.state;

        // 타이머 생성 후 타이머를 삭제하기 위한 주소를 변수 timer에 저장
        timer = setInterval(() => {
            // 지역변수 notifications의 크기와 전송할 데이터 메시지 리스트의 크기를 비교
            if (notifications.length < reservedNotifications.length) {
                // 출력하고자 하는 index번호 생성
                const index = notifications.length;

                // 지역변수 notifications에 전송할 메시지 리스트의 데이터 추가
                notifications.push(reservedNotifications[index]);

                // setState()함수를 사용하여 실제 데이터 업데이트
                this.setState({notifications: notifications});
                                // state의 notifications: 지역변수 notifications

            } else {
                // 생성된 타이머 삭제
                clearInterval(timer);
            }
        }, 3000)
    }

    render() {
        return (
            <div>
                {/* state 객체에 저장된 배열의 크기 만큼 반복 실행 후 출력*/}
                {/* 처음 컴포넌트 생성 시에는 state에 있는 notifications의 값이 없기 때문에 map() 함수가 동작하지 않음*/}
                {/* setState() 함수 실행 후 state에 notifications에 값이 존재하기 때문에 map() 함수가 동작되어 자식 컴포넌트인 Notification이 호출됨*/}
                {this.state.notifications.map((item) => {
                    // 자식 컴포넌트 호출 시 key에 관련된 오류가 발생할 수 있음
                    // 자식 컴포넌트에 데이터를 전달할 때 key 속성이 없으면 컴포넌트의 구분이 힘들기 때문에 오류가 발생함
                    // 배열의 index를 key로 전달하는 방법이 있지만 좋은 방법은 아니므로 사용하지 않는 것이 좋음
                    return <Notification message={item.message} key={item.key} />;
                })}
            </div>
        );
    }
}

export default NotificationList;