import Header from '../components/Header'
import Button from '../components/Button'
import UserRegister from '../components/userRegister'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const nav = useNavigate();

    return (
        <div>
            <Header 
                title={'회원가입'} 
                // leftChild={<Button text={'뒤로가기'} onClick={() => nav(-1)}/>}
            />
            <UserRegister />
        </div>
    )
}

export default Register