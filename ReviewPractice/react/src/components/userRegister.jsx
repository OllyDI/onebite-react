import './userRegister.css'

const UserRegister = () => {
    return (
        <form className="UserLogin" >
            <div className="user_info">
                <input id='id' placeholder="아이디"/>
                <input type="password" id='pw' placeholder="패스워드"/>
                <input type="name" id='name' placeholder="이름"/>
                <Button text={'회원가입'} type={'POSITIVE'}/>
            </div>
            <div className="user_reg">
                <p>로그인</p>
            </div>
        </form>
    )
}

export default UserRegister