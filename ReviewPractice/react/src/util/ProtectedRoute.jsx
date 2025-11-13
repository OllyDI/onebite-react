import { useEffect, useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { api } from './api';
import { UserContext } from './UserContext';

export default function ProtectedRoute({ children }) {
    const [ok, setOk] = useState(null);
    const { setUser } = useContext(UserContext);
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await api.get('/api/me', { withCredentials: true });
                setUser(res.data.user);
                setOk(true);
            } catch {
                try {
                    await api.post('/api/refresh', {}, { withCredentials: true });
                    const res = await api.get('/api/me', { withCredentials: true });
                    setUser(res.data.user);
                    setOk(true);
                } catch {
                    setOk(false);
                }
            }
        }
        checkAuth();
    }, [setUser]);

    if (ok === null) return <div>로딩중...</div>;
    if (!ok) return <Navigate to="/login" replace />;
    return children;
}