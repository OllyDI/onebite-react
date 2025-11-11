import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import { api } from '../util/api'

const UserRegister = () => {

    const [userInfo, setUserInfo] = useState({
        id: '',
        pw: '',
        name: '',
    });
    const nav = useNavigate();

    const onChangeUser = (e) => {
        const {name, value} = e.target;

        setUserInfo({
            ...userInfo,
            [name]: value
        })
    }

    const onClickRegister = async (e) => {
        e.preventDefault();

        try {
            const res = await api.post('/api/register', userInfo);
            alert(res.data.message);
            nav('/login');
        } catch (err) {
            alert(err.response?.data?.message || '회원가입 실패');
        }
    }
    
    return (
        <form className="user_form" onSubmit={onClickRegister}>
            <div className="user_info">
                <input name='id' onChange={onChangeUser} placeholder="아이디"/>
                <input type="password" name='pw' onChange={onChangeUser} placeholder="패스워드"/>
                <input type="name" name='name' onChange={onChangeUser} placeholder="이름"/>
                <Button text={'회원가입'} type={'POSITIVE'}/>
            </div>
            <div className="user_reg">
                <p onClick={() => nav('/login')}>로그인</p>
            </div>
        </form>
    )
}

export default UserRegister