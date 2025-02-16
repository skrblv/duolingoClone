import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Avatar from '../Entities/profile/ui/Avatar';
import Achievements from '../features/achievements/ui/Achievements';
import UserStatistics from '../features/user-statistics/ui/UserStatistics';

import {
  getProfileAvatar,
  setProfileAvatar,
  getNickname,
  getLessonProgress
} from '../entities/profile/model/profile';




const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedAvatar = getProfileAvatar();
    if (savedAvatar) {
      setProfileImage(savedAvatar);
    }
  }, []);

  const handleImageChange = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageDataUrl = e.target?.result;
      setProfileImage(imageDataUrl);
      setProfileAvatar(imageDataUrl);
    };
    reader.readAsDataURL(file);
  };

  const userNickName = getNickname();
  const lessonProgress = getLessonProgress();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="bg-gray-900 text-white p-5 md:ml-[10%] rounded-lg max-w-full flex flex-col md:flex-row justify-evenly min-h-screen">
      <div className="w-full md:w-[50%] pl-0 md:pl-28 flex flex-col gap-10">
        {/* <button
          onClick={handleRegisterClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Зарегистрироваться
        </button> */}
        <Avatar src={profileImage} onChange={handleImageChange} />
        <div className="text-center space-y-1 flex flex-col items-start pb-10 border-b-2 border-b-white">
          <h2 className="text-2xl font-bold">{userNickName}</h2>
          <p className="text-gray-400 text-xl">Регистрация: ноябрь 2024</p>
          <p className='text-gray-400'>Количество пройденных уроков: {lessonProgress}</p>
          <div className="flex justify-center text-xl space-x-4 text-gray-400">
            <span>0 подписок</span>
            <span>0 подписчиков</span>
          </div>
        </div>
        <UserStatistics />
        <Achievements />
      </div>
      <div className="flex flex-col-reverse justify-end pt-[5rem] gap-[3rem] w-full md:w-[368px]">
      </div>
    </div>
  );
};

export default ProfilePage;
