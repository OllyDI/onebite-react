import { useState } from 'react';


function Register () {

    const [name, setName] = useState('이름');
    const [birth, setBirth] = useState('');
    const [country, setCountry] = useState('');
    const [bio, setBio] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangeBirth = (e) => {
        setBirth(e.target.value);
    }
    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }
    const onChangeBio = (e) => {
        setBio(e.target.value);
    }

    return (
    <div>
        <div>
            <input value={name} onChange={onChangeName} placeholder={'이름'} />
        </div>
        <div>
            <input value={birth} type='date' onChange={onChangeBirth} />
        </div>
        <div>
            <select value={country} onChange={onChangeCountry}>
                <option></option>
                <option>한국</option>
                <option>미국</option>
                <option>영국</option>
            </select>
            {country}
        </div>
        <div>
            <textarea value={bio} onChange={onChangeBio} />
            {bio}
        </div>
    </div>
    )
}

export default Register