import { useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { UserContext } from '../util/UserContext'
import { api } from '../util/api'
import Button from '../components/Button'
import DiaryItem from '../components/DiaryItem'
import './DiaryList.css'

const DiaryList = ({data}) => {

    const nav = useNavigate();
    const [sortType, setSortType] = useState('oldest');
    const { setUser } = useContext(UserContext);

    const handleLogout = async () => {
        try {
            if (window.confirm('로그아웃 하시겠습니까?')) {
                await api.post('/api/logout');
                setUser(null);
                nav('/login');
            }
        } catch (err) {
            console.log(err);
        }
    }

    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    }

    const getSortedDate = () => {
        return data.toSorted((a, b) => {
            if (sortType === 'oldest') {
                return a.createdDate - b.createdDate;
            } else {
                return b.createdDate - a.createdDate;
            }
        })
    }
    const sortedData = getSortedDate();

    return (
        <div className='DiaryList'>
            <div className='menu_bar'>
                <Button text={'🔓'} onClick={handleLogout}/>
                <select onChange={onChangeSortType}>
                    <option value={'oldest'}>오래된순</option>
                    <option value={'latest'}>최신순</option>
                </select>
                <div className='new_diary_button'>
                    <Button onClick={() => {nav('/new')}} text={'새 일기 쓰기'} type={'POSITIVE'}/>
                </div>
            </div>
            <div className='list_wrapper'>
                {sortedData.map((item) => <DiaryItem key={item.id} {...item} />)}
            </div>
        </div>
    )
}

export default DiaryList