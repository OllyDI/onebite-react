import EmotionItem from './EmotionItem'
import Button from './Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import 'dayjs/locale/ko'

import './Editor.css'

dayjs.extend(isLeapYear);
dayjs.locale('ko');

const emotionList = [
    {
        emotionId: 1,
        emotionName: '완전좋음'
    }, 
    {
        emotionId: 2,
        emotionName: '좋음'
    }, 
    {
        emotionId: 3,
        emotionName: '그럭저럭'
    }, 
    {
        emotionId: 4,
        emotionName: '나쁨'
    }, 
    {
        emotionId: 5,
        emotionName: '끔찍함'
    }, 
]

// const getStringedDate = (targetDate) => {
//     let year = targetDate.getFullYear();
//     let month = targetDate.getMonth() + 1;
//     let date = targetDate.getDate();

//     month = month < 10 ? `0${month}` : month
//     date = date < 10 ? `0${date}` : date

//     return `${year}-${month}-${date}`
// }


/* 
    Editor 페이지는 생성, 수정 페이지 두 곳에서 사용하기 때문에 
    useContext로 onCreate를 바로 불러와서 사용하면
    수정시에 작성 완료 버튼을 누르면 문제가 발생
    -> 부모 컴포넌트에서 onSubmit 함수를 넘겨주어 생성인지 수정인지 구분
*/
const Editor = ({onSubmit}) => {

    const nav = useNavigate();

    const [input, setInput] = useState({
        createdDate: dayjs(new Date()).format('YYYY-MM-DD'),
        emotionId: 1,
        content: ''
    });
    const onChangeInput = (e) => {
        let name = e.target.name
        let value = e.target.value

        setInput({
            ...input,
            [name]: value
        })
    }
    
    const onClickSubmitButton = () => {
        onSubmit(input);
    }

    return (
        <div className='Editor'>
            <section className='date_section'>
                <h4>오늘의 날짜</h4>
                <input 
                    type='date' 
                    name='createdDate'
                    onChange={onChangeInput}
                    value={input.createdDate} />
            </section>

            <section className='emotion_section'>
                <h4>오늘의 감정</h4>
                <div className='emotion_list_wrapper'>
                    {emotionList.map((item) => (
                        <EmotionItem 
                            onClick={() => onChangeInput({
                                target: {
                                    name: 'emotionId',
                                    value: item.emotionId
                                }
                            })}
                            key={item.emotionId} 
                            {...item} 
                            isSelected={item.emotionId === input.emotionId} 
                        />
                    ))}
                </div>
            </section>

            <section className='content_section'>
                <h4>오늘의 일기</h4>
                <textarea 
                    name='content' 
                    value={input.content}
                    onChange={onChangeInput}
                    placeholder='오늘은 어땠나요?' 
                />
            </section>

            <section className='button_section'>
                <Button text={'취소하기'} onClick={() => nav(-1)} />
                <Button text={'작성완료'} type={'POSITIVE'} onClick={onClickSubmitButton} />
            </section>
        </div>
    )
}

export default Editor