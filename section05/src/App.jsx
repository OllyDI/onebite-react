import './App.css';

import HookExam from './components/HookExam'

/*
  리액트의 컴포넌트는 첫 글자가 무조건 대문자로 작성해야 인식됨

  가변적인 값을 이용할 때 리-렌더링을 활용하는 useState를 사용

    리-렌더링 조건 3가지
    1. state 변경
    2. props 변경
    3. 부모 컴포넌트 리-렌더링 되면 자식 컴포넌트도 리-렌더링 발생
*/

function App() {

  return (
    <>
    <HookExam />
    </>
  )
}

export default App