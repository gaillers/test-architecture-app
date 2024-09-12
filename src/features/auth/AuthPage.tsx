import { FC } from 'react';
import AuthForm from '@/features/auth/AuthForm';
import { useAuthNavigation } from '@/shared/hooks/useAuthNavigation';

const AuthPageWrapper: FC = () => {
    const { handleLogin, loading, error } = useAuthNavigation();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Login</h2>
                <AuthForm
                    onSubmit={handleLogin}
                    loading={loading}
                    error={error}
                />
            </div>
        </div>
    );
};

export default AuthPageWrapper;
