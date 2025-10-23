function Controller({onClickButton}) {

    // onClick을 함수로 만들어서 onClickButton을 넣는 이유 -> 인수를 전달하기 위해서
    return (
        <div>
            <button onClick={() => {onClickButton(-100)}}>-100</button>
            <button onClick={() => {onClickButton(-10)}}>-10</button>
            <button onClick={() => {onClickButton(-1)}}>-1</button>
            <button onClick={() => {onClickButton(+1)}}>+1</button>
            <button onClick={() => {onClickButton(+10)}}>+10</button>
            <button onClick={() => {onClickButton(+100)}}>+100</button>
        </div>
    )
}

export default Controller