import './App.css'
import { useState, useRef, useReducer, useCallback, createContext, useMemo } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
// import Exam from './components/Exam'

const mockData = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: 'React 복습하기',
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: 'React 다시보기',
    date: new Date().getTime(),
  },
]

// 외부에 기능을 따로 구현 -> 복잡한 로직이나 여러 컴포넌트간에 상태 공유
function reducer(state, action) {
  switch (action.type) {
    case 'CREATE': return [...state, action.data];
    case 'UPDATE': return state.map((item) => 
      item.id == action.targetId 
      ? {...item, isDone: !item.isDone} 
      : item
    )
    case 'DELETE': return state.filter((item) => item.id != action.targetId)
    default: state
  }
}

// 부모 데이터를 자식에게 전달할 때 드릴링이 발생하지 않게 다리를 건너지 않고 바로 전달
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {

  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // useCallback -> 리렌더링 되더라도 함수 재생성 방지
  const onCreate = useCallback((content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime()
      }
    })
  }, []) 
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: 'UPDATE',
      targetId: targetId,
    })
  }, [])
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId
    })
  }, [])

  const memoizedDispatch = useMemo(() => {
    return {onCreate, onUpdate, onDelete}
  }, []);

  return (
    <div className='App'>
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
      {/* <Exam /> */}
    </div>
  )
}

export default App
