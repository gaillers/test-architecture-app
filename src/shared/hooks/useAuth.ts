import { useState, useEffect, useCallback } from 'react';
import { container } from '@services/inversify.config';
import { AuthService } from '@services/auth.service';
import { SERVICE } from '@core/types/services';

export const useAuth = () => {
    const authService = container.get<AuthService>(SERVICE.AuthService);
    
    const [session, setSession] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (authService.isAuthenticated()) {
            setSession('mock-token'); 
        }
    }, [authService]);

    const login = useCallback((username: string, password: string) => {
        setLoading(true);
        authService.login(username, password).subscribe({
            next: (result: string) => {
                if (result === 'mock-token') {
                    setSession(result);
                    setError(null);
                } else {
                    setSession(null);
                    setError(result);
                }
                setLoading(false);
            },
            error: () => {
                setError('An error occurred');
                setLoading(false);
            },
        });
    }, [authService]);

    const logout = useCallback(() => {
        authService.logout();
        setSession(null);
    }, [authService]);

    const isAuthenticated = useCallback(() => {
        return !!session;
    }, [session]);

    return { session, login, logout, loading, error, isAuthenticated };
};
