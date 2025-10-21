import { useState } from 'react'

/*
    hook 3가지 팁
    1. hook은 반드시 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
    2. hook은 조건문, 반복문안에 호출 불가능 
    3. 커스텀 훅 만들 수 있음

    ex)
    1. 함수 외부에서 훅 호출시 오류 발생
    const state = useState();   

    2. if, for문 안에서 훅 호출 불가능
    if (true) { const state = useState(); }

    3. 커스텀 훅 생성은 이름 앞에 use를 붙여주면 됨
*/
function useInput() {
    const [input, setInput] = useState('');

    const onChange = (e) => {
        setInput(e.target.value);
    }

    return [input, onChange];
}

export default useInput