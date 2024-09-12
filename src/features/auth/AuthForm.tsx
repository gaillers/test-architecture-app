import { FC, useState } from 'react';
import InputField from '@/shared/components/InputFields';
import SubmitButton from '@/shared/components/SubmitButton';

import { LoginFormProps } from '@/core/types/auth';

const AuthForm: FC<LoginFormProps> = ({ onSubmit, loading, error }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputField
        id="username"
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <SubmitButton loading={loading} label="Login" />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </form>
  );
};

export default AuthForm;
