import { useEffect } from 'react'

function Even() {

    useEffect(() => {
        // 클린업 or 정리함수 -> 언마운트시 실행
        return () => {
            console.log('Unmount');
        };
    }, []);

    return (
        <div>짝수</div>
    )
}

export default Even