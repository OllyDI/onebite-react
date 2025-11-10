import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import UserLogin from '../components/UserLogin';

const Users = () => {

    const [data, setData] = useState('null');
    const nav = useNavigate();

    return (
        <div>
            <Header 
                title={'로그인'} 
                // leftChild={<Button text={'뒤로가기'} onClick={() => nav()}/>}
            />
            <UserLogin />
        </div>
    )
}

export default Users