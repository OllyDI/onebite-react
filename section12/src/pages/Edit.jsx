import Header from "../components/Header"
import Button from "../components/Button"


const Edit = () => {


    return (
        <div>
            <Header 
                title={'일기 수정하기'}
                leftChild={<Button text={'뒤로가기'}/>}
                rightChild={<Button text={'삭제하기'} type={'NEGATIVE'}/>}
            />
        </div>
    )
}

export default Edit