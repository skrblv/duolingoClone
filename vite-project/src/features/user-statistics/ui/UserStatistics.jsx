import React from 'react';

const UserStatistics = () => {
  const stats = [
    { label: 'Ударный режим', value: 0 },
    { label: 'Очки опыта', value: 0 },
    { label: 'Текущая лига', value: 'Нет' },
    { label: 'Топ-3', value: 0 },
  ];

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">Статистика</h3>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-800 p-3 rounded-lg flex flex-col items-center"
          >
            <span className="text-xl font-bold">{stat.value}</span>
            <span className="text-gray-400 text-sm">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserStatistics;
