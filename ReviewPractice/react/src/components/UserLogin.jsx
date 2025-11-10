import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from "./Button"
import { api } from '../util/api'
import './UserLogin.css'

const UserLogin = () => {

    const [userInfo, setUserInfo] = useState({
        id: '',
        pw: '',
    })
    const nav = useNavigate();

    const onClickLogin = async (e) => {
        e.preventDefault();

        try {
            await api.post('/api/login', userInfo);
            nav('/');
        } catch (err) {
            alert(err.response?.data?.message || '로그인 실패');
        }
    }

    const onChangeUser = (e) => {
        const {name, value} = e.target;

        setUserInfo({
            ...userInfo,
            [name]: value
        })
    }

    return (
        <form className="user_form" onSubmit={onClickLogin}>
            <div className="user_info">
                <input  name='id' onChange={onChangeUser} placeholder="아이디"/>
                <input type="password" name='pw' onChange={onChangeUser} placeholder="패스워드"/>
                <Button text={'로그인'} type={'POSITIVE'}/>
            </div>
            <div className="user_reg" onClick={() => {nav('/register')}}>
                <p>회원가입</p>
            </div>
        </form>

    )
}

export default UserLogin