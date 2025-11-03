import { useReducer, useRef, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import Notfound from './pages/Notfound'

import './App.css'

/*
  구현 페이지
  1. '/': 모든 일기 조회하는 Home 페이지
  2. '/new': 새로운 일기를 작성하는 New 페이지
  3. '/diary': 일기를 조회하는 Diary 페이지
*/

const mockData = [
  {
    id: 0,
    createdDate: new Date('2025-10-30').getTime(),
    emotionId: 1,
    content: '1번 일기 내용',
  }, 
  {
    id: 1,
    createdDate: new Date('2025-10-31').getTime(),
    emotionId: 2,
    content: '2번 일기 내용',
  }, 
  {
    id: 2,
    createdDate: new Date('2025-09-05').getTime(),
    emotionId: 3,
    content: '3번 일기 내용',
  }, 
]

function reducer(state, action) {
  switch(action.type) {
    case 'CREATE': return [...state, action.data];
    case 'UPDATE': return state.map((item) => 
      String(item.id) === String(action.data.id) 
      ? action.data 
      : item
    );
    case 'DELETE': return state.filter((item) => String(item.id) !== String(action.id));
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {

  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content
      }
    })
  }
  // 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        createdDate,
        emotionId,
        content
      }
    })
  }
  // 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      id
    })
  }

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<New />} />
            <Route path='/diary/:id' element={<Diary />} />
            <Route path='/Edit/:id' element={<Edit />} />
            <Route path='*' element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App
