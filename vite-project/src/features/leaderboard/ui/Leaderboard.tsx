import React from 'react';
import { users } from '../model/users';
import { UserCard } from '../../../Entities/user/ui/UserCard';


export const Leaderboard: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center sm:pl-[10%] bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-900 opacity-30 animate-pulse"></div>
      <div className="bg-slate-800 sm:max-w-[80%] shadow-2xl rounded-lg overflow-hidden max-w-3xl w-full relative z-10 max-md:max-w-2xl">
        <div className="bg-gradient-to-r from-teal-700 to-teal-500 p-4 sm:p-6 text-white text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold flex items-center justify-center">
            Leaderboard
          </h2>
        </div>
        <ul className="divide-y divide-gray-700">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
};
