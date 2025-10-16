import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'
/*
  리액트의 컴포넌트는 첫 글자가 무조건 대문자로 작성해야 인식됨
*/

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
