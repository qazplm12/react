import React from "react";
import Reply from "./Reply";

const replys = [
{name: '아이유', content:'첫번째 댓글입니다.'},
{name: '유인나', content:'두번째 댓글입니다.'},
{name: '유재석', content:'세번째 댓글입니다.'}
]


function ReplyList(props) {
    return(
        <div>
            {
                replys.map((reply)=> {
                    return (
                        <Reply name={reply.name} content={reply.content} />
                    )
                })
            }
            {/*<Reply name={replys.name} content={replys.content} />*/}
            {/*<Reply name={replys.name} content={replys.content} />*/}
            {/*<Reply name={replys.name} content={replys.content} />*/}
        </div>
    )
}

export default ReplyList;