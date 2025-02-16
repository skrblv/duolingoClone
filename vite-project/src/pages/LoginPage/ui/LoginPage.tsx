import React from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../../../features/LoginForm/ui/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="text-center flex flex-col gap-5">
        <h1 className="text-white text-4xl">Login</h1>
        <LoginForm />
        <p className="text-cyan-300 text-4xl">
          or <Link to="/register" className="text-green-400">register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
