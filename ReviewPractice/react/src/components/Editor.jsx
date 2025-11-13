import EmotionItem from './EmotionItem'
import Button from './Button'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { emotionList } from '../util/constants'
import { getStringedDate } from '../util/get-stringed-date'
import { UserContext } from '../util/UserContext'

import './Editor.css'

/* 
    Editor 페이지는 생성, 수정 페이지 두 곳에서 사용하기 때문에 
    useContext로 onCreate를 바로 불러와서 사용하면
    수정시에 작성 완료 버튼을 누르면 문제가 발생
    -> 부모 컴포넌트에서 onSubmit 함수를 넘겨주어 생성인지 수정인지 구분
*/
const Editor = ({initData, onSubmit}) => {

    const nav = useNavigate();
    const { user } = useContext(UserContext);
    const [input, setInput] = useState({
        createdDate: new Date(),
        emotionId: 1,
        content: '',
        user_id: user.user_id
    });

    useEffect(() => {
        if (initData) {
            setInput({
                ...initData, 
                createdDate: getStringedDate(initData.createdDate)
            });
        }
    }, [initData])

    
    const onChangeInput = (e) => {
        let name = e.target.name
        let value = e.target.value

        setInput({
            ...input,
            [name]: value
        })
    }
    
    const onClickChangedDate = () => {
        setInput({
            ...input,
            createdDate: getStringedDate(new Date())
        })
    }

    const onClickSubmitButton = () => {
        onSubmit(input);
    }

    return (
        <div className='Editor'>
            
            <section className='date_section'>
                <h4>오늘의 날짜</h4>
                <div className='date_input'>
                    <input 
                        type='datetime-local' 
                        name='createdDate'
                        onChange={onChangeInput}
                        value={getStringedDate(input.createdDate)} 
                    />
                    <Button text={'현재 시간으로 변경'} type={'POSITIVE'} onClick={onClickChangedDate}/>
                </div>
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