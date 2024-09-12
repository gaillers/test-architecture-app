import { useEffect, useCallback } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useAuth } from '@/shared/hooks/useAuth';

export const useAuthNavigation = () => {
    const { login, loading, error, session } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (session) {
            navigate({ to: '/' });
        }
    }, [session, navigate]);

    const handleLogin = useCallback((username: string, password: string) => {
        login(username, password);
    }, [login]);

    return { handleLogin, loading, error };
};
