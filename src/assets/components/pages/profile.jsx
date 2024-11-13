import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Achievements from './achievment';

const UserProfile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="bg-gray-900 text-white p-5 md:ml-[10%] rounded-lg max-w-full flex flex-col md:flex-row justify-evenly min-h-screen">
      <div className="w-full md:w-[50%] pl-0 md:pl-28 flex flex-col gap-10">
        <button
          onClick={handleRegisterClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Зарегистрироваться
        </button>

        <div className="bg-gray-800 w-full h-[255px] p-4 rounded-lg flex items-center justify-center relative">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-[240px] rounded-md object-cover"
            />
          ) : (
            <label className="bg-blue-500 w-[155px] h-[155px] rounded-full flex items-center justify-center text-8xl text-center text-white cursor-pointer">
              +
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          )}
          {profileImage && (
            <label className="absolute top-2 right-2 bg-gray-700 p-2 rounded-full cursor-pointer">
              <span className="text-gray-400">✎</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          )}
        </div>

        <div className="text-center space-y-1 flex flex-col items-start pb-10 border-b-2 border-b-white">
          <h2 className="text-2xl font-bold">Нет никнейма </h2>
          <p className="text-gray-400 text-xl">Регистрация: ноябрь 2024</p>
          <div className="flex justify-center text-xl space-x-4 text-gray-400">
            <span>0 подписок</span>
            <span>0 подписчиков</span>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Статистика</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2">
            <div className="bg-gray-800 p-3 rounded-lg flex flex-col items-center">
              <span className="text-xl font-bold">0</span>
              <span className="text-gray-400 text-sm">Ударный режим</span>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg flex flex-col items-center">
              <span className="text-xl font-bold">0</span>
              <span className="text-gray-400 text-sm">Очки опыта</span>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg flex flex-col items-center">
              <span className="text-xl font-bold">Нет</span>
              <span className="text-gray-400 text-sm">Текущая лига</span>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg flex flex-col items-center">
              <span className="text-xl font-bold">0</span>
              <span className="text-gray-400 text-sm">Топ-3</span>
            </div>
          </div>
        </div>
        <Achievements />
      </div>
      <div className="flex flex-col-reverse justify-end pt-[5rem] gap-[3rem] w-full md:w-[368px]">
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="space-y-2 h-full flex flex-col justify-between">
            <h3 className="text-lg font-semibold mb-2">Добавить друзей</h3>
            <button className="w-full p-2 rounded-lg flex items-center justify-between">
              <span>Найти друзей</span>
              <span className="text-gray-400">→</span>
            </button>
            <button className="w-full p-2 rounded-lg flex items-center justify-between">
              <span>Пригласить друзей</span>
              <span className="text-gray-400">→</span>
            </button>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Подписчики</h3>
          <p className="text-gray-400">
            Учиться вместе намного интереснее и эффективнее.
          </p>
          <div className="flex justify-center mt-2">
            <div className="w-32 h-16 bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-gray-400">Follower Icons</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
