import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even'
import { useState, useEffect, useRef } from 'react'
import './App.css'

// useEffect: Dependency Arrray(의존성 배열)
// props는 부모에서 자식 방향으로만 데이터 전달 가능 -> State Lifting 이라고 함 (단방향 데이터 흐름)

function App() {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const isMount = useRef(false);

  // 1. 마운트: 탄생
  useEffect(()=>{
    console.log('Mount');
  }, []);
 
  // 2. 업데이트: 변화, 리-렌더링 -> deps 생략 시 업데이트 마다 실행됨
  useEffect(()=>{
    console.log('Update');
  });
  // 2-1. 업데이트 시에만 실행하고 싶은 경우
  useEffect(()=> {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log('Update2');
  })

  // 3. 언마운트: 죽음
  useEffect(()=>{});


  const onClickButton = (value) => {
    setCount(count + value);
  }

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e)=>{
          setInput(e.target.value);
        }}/>
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 == 0 ? <Even /> : <br/>}
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App
