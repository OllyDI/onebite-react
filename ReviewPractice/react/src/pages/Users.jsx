import { useState, useEffect } from 'react';

import axios from 'axios'
import Header from '../components/Header';
import UserLogin from '../components/UserLogin';

const Users = () => {

    const [data, setData] = useState('null');

    useEffect(() => {
        axios({
            url: 'http://ollyc.iptime.org:15001/api/test',
            method: 'post',
        }).then((api) => {
            setData(api.data);
        }).catch((err) => {
            console.log('test error');
        })
    }, [])

    return (
        <div>
            <Header title={'로그인'}/>
            <UserLogin />
        </div>
    )
}

export default Users