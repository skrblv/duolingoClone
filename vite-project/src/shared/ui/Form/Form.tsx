import React, { useState } from 'react';

interface FormProps {
  title: string;
  handleClick: (email: string, password: string) => void;
  setNickname: (nickname: string) => void;
}

export const Form: React.FC<FormProps> = ({ title, handleClick, setNickname }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleClick(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Nickname"
        className="p-2 border rounded"
        onChange={(e) => setNickname(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        className="p-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="p-2 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white py-2 rounded">
        {title}
      </button>
    </form>
  );
};
