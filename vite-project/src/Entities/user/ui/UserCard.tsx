import React from 'react';
import { FaCrown, FaMedal } from 'react-icons/fa';
import { User } from '../model/types';

type UserCardProps = {
  user: User;
};

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <li
      className="flex flex-col sm:flex-row items-center p-4 sm:p-6 hover:bg-slate-700 hover:shadow-lg hover:ring-2 hover:ring-teal-500 transition-all rounded-lg mx-2 sm:mx-6 my-2 sm:my-3"
    >
      <span className="text-teal-300 text-lg sm:text-xl font-bold mr-0 sm:mr-4">{user.id}.</span>
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mr-0 sm:mr-6 border-4 border-indigo-500">
        <img
          className="object-cover w-full h-full"
          src={user.avatar}
          alt={`${user.name} avatar`}
          loading="lazy"
        />
      </div>
      <div className="flex-1 text-center sm:text-left mt-2 sm:mt-0">
        <h3 className="text-lg sm:text-2xl font-semibold text-white">{user.name}</h3>
        <p className="text-gray-400 text-sm sm:text-base">{user.points}</p>
      </div>
      <div className="flex items-center space-x-2 sm:space-x-4 mt-2 sm:mt-0">
        {user.achievement === 'crown' && (
          <FaCrown className="text-yellow-400 text-2xl sm:text-3xl" title="Top Achiever" />
        )}
        {user.achievement === 'medal' && (
          <FaMedal className="text-orange-400 text-2xl sm:text-3xl" title="High Scorer" />
        )}
        <p
          className={`text-xs sm:text-sm font-semibold ${
            user.status === 'Active'
              ? 'text-green-400'
              : user.status === 'Inactive'
              ? 'text-red-400'
              : 'text-yellow-400'
          }`}
        >
          {user.status}
        </p>
      </div>
    </li>
  );
};
