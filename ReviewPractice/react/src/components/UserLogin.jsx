import { useState } from 'react'

import Button from "./Button"
import './UserLogin.css'
import axios from 'axios'

const UserLogin = () => {

    const [userInfo, setUserInfo] = useState({
        id: '',
        password: '',
    })

    const onClickLogin = (e) => {
        e.preventDefault();
        axios({
            url: 'http://ollyc.iptime.org:15001/api/login',
            method: 'post',
            data: userInfo,
            withCredentials: true,
        }).then((api) => {
            console.log(api.data);
        }).catch((err) => {
            console.log('로그인 실패: ' + err);
        })
    }

    const onChangeId = (users) => {
        setUserInfo({
            ...userInfo,
            id: users.target.value
        });
    }
    const onChangePw = (users) => {
        setUserInfo({
            ...userInfo,
            password: users.target.value
        })
    }
    
    return (
        <form className="UserLogin" onSubmit={onClickLogin}>
            <div className="user_info">
                <input id='id' onChange={onChangeId} placeholder="아이디"/>
                <input type="password" id='pw' onChange={onChangePw} placeholder="패스워드"/>
                <Button text={'로그인'} type={'POSITIVE'}/>
            </div>
            <div className="user_reg">
                <p>회원가입</p>
            </div>
        </form>

    )
}

export default UserLogin