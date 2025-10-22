import Viewer from './components/Viewer'
import Controller from './components/Controller'
import { useState } from 'react'
import './App.css'


function App() {

  // props는 부모에서 자식 방향으로만 데이터 전달 가능 -> State Lifting 이라고 함 (단방향 데이터 흐름)
  const [count, setCount] = useState(0);
  const onClickButton = (value) => {
    setCount(count + value);
  }

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App
