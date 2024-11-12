import React from 'react';

const achievementsData = [
  {
    id: 1,
    title: 'Энтузиаст',
    level: 1,
    description: 'Удержите ударный режим 3 дня',
    progress: 0,
    target: 3,
    icon: '🔥',
  },
  {
    id: 2,
    title: 'Мудрец',
    level: 1,
    description: 'Заработайте 100 очков опыта',
    progress: 0,
    target: 100,
    icon: '🧙‍♂️',
  },
  {
    id: 3,
    title: 'Эрудит',
    level: 1,
    description: 'Изучите новый язык программирования',
    progress: 0,
    target: 50,
    icon: '📜',
  },
];

const Achievements = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-lg text-white">
      <h2 className="text-2xl font-bold mb-4">Достижения</h2>
      <ul className="space-y-4">
        {achievementsData.map((achievement) => (
          <li
            key={achievement.id}
            className="bg-gray-800 p-4 rounded-lg flex items-center space-x-4"
          >
            <div className="text-4xl">{achievement.icon}</div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{achievement.title}</h3>
              <p className="text-sm text-gray-400">{achievement.description}</p>
              <div className="mt-2 bg-gray-700 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{
                    width: `${(achievement.progress / achievement.target) * 100}%`,
                  }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                {achievement.progress}/{achievement.target}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
