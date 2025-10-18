import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Button from './components/Button';
import './App.css';
/*
  리액트의 컴포넌트는 첫 글자가 무조건 대문자로 작성해야 인식됨
*/

function App() {

  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  }

  return (
    <>
      <Button {...buttonProps}/>
      <Button text={"카페"}/>
      <Button text={"블로그"}>
        <Header />
      </Button>
    </>
  )
}

export default App
