import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { api } from './api';

export default function ProtectedRoute({ children }) {
    const [ok, setOk] = useState(null);

    useEffect(() => {
    api.get('/api/me', { withCredentials: true })
        .then(() => setOk(true))
        .catch(async () => {
        try {
            await api.post('/api/refresh', {}, { withCredentials: true });
            await api.get('/api/me', { withCredentials: true });
            setOk(true);
        } catch (err) {
            setOk(false);
        }
        });
    }, []);

    if (ok === null) return <div>로딩중...</div>;
    if (!ok) return <Navigate to="/login" replace />;
    return children;
}