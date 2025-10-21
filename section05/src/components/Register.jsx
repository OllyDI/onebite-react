import { useState, useRef } from 'react';

function Register () {

    const [input, setInput] = useState({
        name: '',
        birth: '',
        country: '',
        bio: '',
    })
    console.log(input);

    // useRef는 useState와 다르게 값이 변경되도 리-렌더링이 발생하지 않음
    // useRef를 사용하지 않고 let count = 0을 만들어서 증감을 넣으면 증감식이 안먹힘 -> useRef는 증감이 됨
    const countRef = useRef(0);     
    const inputRef = useRef();

    // e.target.name: 이벤트를 발생시킨 타겟 태그 안에 name을 키로 설정 -> name='birth'
    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current);
        setInput({
            ...input,
            [e.target.name]: e.target.value 
        })
    }

    const onSubmit = () => {
        if (input.name === '') {
            inputRef.current.focus();
        }
    }

    return (
    <div>
        <div>
            
        </div>

        <div>
            <input ref={inputRef} name='name' value={input.name} onChange={onChange} placeholder={'이름'} />
        </div>
        <div>
            <input name='birth' value={input.birth} type='date' onChange={onChange} />
        </div>
        <div>
            <select name='country' value={input.country} onChange={onChange}>
                <option value=''></option>
                <option value='kr'>한국</option>
                <option value='us'>미국</option>
                <option value='uk'>영국</option>
            </select>
            {input.country}
        </div>
        <div>
            <textarea name='bio' value={input.bio} onChange={onChange} />
            {input.bio}
        </div>
        <button onClick={onSubmit}>제출</button>
    </div>
    )
}

export default Register