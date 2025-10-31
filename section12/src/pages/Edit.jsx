import { useParams } from 'react-router-dom'

const Edit = () => {

    const params = useParams();

    return (
        <div>{params.id + 1}번</div>
    )
}

export default Edit