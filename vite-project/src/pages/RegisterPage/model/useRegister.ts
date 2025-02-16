import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/slices/userSlice';
import { auth, db } from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { NavigateFunction } from 'react-router-dom';

export const useAuth = (navigate?: NavigateFunction) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async ({ email, password, nickname }: { email: string; password: string; nickname: string; }) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Получение токена
      const token = await user.getIdToken();

      const userData = {
        uid: user.uid,
        email: user.email,
        token: token,
        nickname: nickname,
      };

      // Сохранение данных пользователя в localStorage
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('lessonProgress', '1');

      // Обновление состояния пользователя в Redux
      dispatch(setUser(userData));

      // Сохранение пользователя в Firestore
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        nickname,
        createdAt: new Date(),
      });

      // Навигация на страницу профиля
      if (navigate) {
        navigate('/profile');
      }
    } catch (err) {
      setError(err.message || 'Error registering user');
    } finally {
      setLoading(false);
    }
  };

  return { handleRegister, loading, error };
};
