import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/slices/userSlice';
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const useLoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const token = await user.getIdToken();

      const userData = {
        uid: user.uid,
        email: user.email,
        token: token,
      };

      // Сохранение данных пользователя
      localStorage.setItem('user', JSON.stringify(userData));
      dispatch(setUser(userData));

      // Перенаправление на профиль
      navigate('/profile');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return { handleLogin };
};
