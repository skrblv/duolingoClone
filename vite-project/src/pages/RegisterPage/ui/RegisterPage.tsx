import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from '../../../shared/ui/Form/Form';
import { useAuth } from '../model/useRegister'; // Измените на useAuth

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { handleRegister } = useAuth(navigate); // Используйте useAuth вместо useRegister
  const [nickname, setNickname] = useState('');

  const handleClick = (email: string, password: string) => {
    handleRegister({ email, password, nickname }); // Передайте объект с данными
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="text-center flex flex-col gap-5 items-center">
        <Form
          title="Register"
          handleClick={handleClick}
          setNickname={setNickname}
        />
        <p className="text-cyan-300 text-4xl">Уже есть аккаунт?</p>
        <Link to="/login" className="text-green-400 text-4xl">
          Войти
        </Link>
      </div>
    </div>
  );
};


export default RegisterPage;
