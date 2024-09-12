import React, { createContext, useContext, ReactNode } from 'react';
import { container } from '@services/inversify.config';
import { AuthService } from '@services/auth.service';
import { SERVICE } from '@core/types/services';

interface AuthContextType {
  authService: AuthService;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const authService = container.get<AuthService>(SERVICE.AuthService);

  return (
    <AuthContext.Provider value={{ authService }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthService = (): AuthService => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthService must be used within an AuthProvider');
  }
  return context.authService;
};
