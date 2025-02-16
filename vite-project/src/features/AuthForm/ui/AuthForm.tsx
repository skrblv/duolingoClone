import React, { useState } from 'react';

interface AuthFormProps {
  title: string;
  handleSubmit: (email: string, password: string, nickname?: string) => void;
  isRegister?: boolean;
}

export const AuthForm: React.FC<AuthFormProps> = ({ title, handleSubmit, isRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(email, password, isRegister ? nickname : undefined);

  };

  return (
    <form onSubmit={onSubmit} className="max-w-md mx-auto bg-white p-8 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>

      {isRegister && (
        <label className="block text-gray-700 font-medium mb-2">
          Никнейм:
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
            required
          />
        </label>
      )}

      <label className="block text-gray-700 font-medium mb-2">
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
          required
        />
      </label>

      <label className="block text-gray-700 font-medium mb-4">
        Пароль:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
          required
        />
      </label>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
      >
        {title}
      </button>
    </form>
  );
};
