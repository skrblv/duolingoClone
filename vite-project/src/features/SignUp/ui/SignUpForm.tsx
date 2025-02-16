import React from 'react';
import { useAuth } from '../../../pages/RegisterPage/model/useRegister'; // Убедитесь, что этот путь верный
import { AuthForm } from '../../AuthForm/ui/AuthForm';

const SignUpForm: React.FC = () => {
  const { handleRegister, loading, error } = useAuth(); // Измените на handleRegister

  const handleSubmit = (data: { email: string; password: string; nickname: string; }) => {
    handleRegister(data); // Убедитесь, что данные передаются в нужном формате
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      {error && <div className="text-red-500">{error}</div>}
      <AuthForm 
        title="Sign Up" 
        handleSubmit={handleSubmit} 
        isRegister 
      />
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default SignUpForm;
