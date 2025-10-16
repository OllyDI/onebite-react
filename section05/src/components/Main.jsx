/*
function Main() {
----- js 문법 -----
    return (
    ----- html 문법 -----
    )
}

주의사항
1. 중괄호 내부에는 js 표현식만 넣을 수 있음 -> if or for문 사용 불가
2. 숫자, 문자, 배열 값만 렌더링 가능 -> boolean, null, undefined, 객체 사용 불가
3. 모든 태그는 닫혀 있어야 함
4. 최상위 태그는 반드시 한개여야 함
*/

import './Main.css';

function Main() {

    const user = {
        name: "user",
        isLogin: true
    }

    return (
        <>
        { 
        user.isLogin ? 
        <div className='logout'>로그아웃</div> : 
        <div>로그인</div>
        }
        </>
    )
}

export default Main;