import React from 'react';
import { FaTrophy, FaMedal, FaCrown } from 'react-icons/fa';

const users = [
  {
    id: 1,
    name: 'Раимжанов Байтур',
    points: '1234 points',
    avatar: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQgSvVwAdK_66hOT_ut0rKqjeYbqeD7qfjN31wUqpfiNKTAqhFv',
    status: 'Active',
    achievement: 'crown',
  },
  {
    id: 2,
    name: 'Миминов Мустафа',
    points: '987 points',
    avatar: 'https://disney-classic.ru/wp-content/uploads/Mufasa_Lion_King_-1024x824.jpg',
    status: 'Inactive',
    achievement: 'medal',
  },
  {
    id: 3,
    name: 'Бекишев Эльмар',
    points: '876 points',
    avatar: 'https://s0.rbk.ru/v6_top_pics/media/img/5/63/756763783160635.webp',
    status: 'Active',
    achievement: 'medal',
  },
  {
    id: 4,
    name: 'Ерещенко Владислав',
    points: '765 points',
    avatar: 'https://media.istockphoto.com/id/533837393/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D0%BB%D0%BE%D1%83%D0%BD.jpg?s=612x612&w=0&k=20&c=AbY-4_kRPJjgEjKPgPX_9LN3b_FzSGC80VmYfNNzkUU=',
    status: 'Busy',
    achievement: null,
  },
  {
    id: 5,
    name: 'Акылбек Арсланов',
    points: '654 points',
    avatar: 'https://sun9-79.userapi.com/impg/CNiXMH95-oxqYkUpDZnVn31I4uZ0JjTtBNncEg/6JqHpS4RzFA.jpg?size=510x422&quality=96&sign=623b08a2b7125239886f264087560670&type=album',
    status: 'Active',
    achievement: null,
  },
];

const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center sm:pl-[10%] bg-gradient-to-b from-gray-900 to-black relative overflow-hidden ">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-900 opacity-30 animate-pulse"></div>

      <div className="bg-slate-800 sm:max-w-[80%] shadow-2xl rounded-lg overflow-hidden max-w-3xl w-full relative z-10 max-md:max-w-2xl">
        <div className="bg-gradient-to-r from-teal-700 to-teal-500 p-4 sm:p-6 text-white text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold flex items-center justify-center">
            <FaTrophy className="text-yellow-400 mr-2 sm:mr-3" /> Top Users
          </h2>
        </div>

        <ul className="divide-y divide-gray-700 ">
          {users.map((user, index) => (
            <li
              key={user.id}
              className="flex flex-col sm:flex-row items-center p-4 sm:p-6 hover:bg-slate-700 hover:shadow-lg hover:ring-2 hover:ring-teal-500 transition-all rounded-lg mx-2 sm:mx-6 my-2 sm:my-3"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <span className="text-teal-300 text-lg sm:text-xl font-bold mr-0 sm:mr-4">{user.id}.</span>
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mr-0 sm:mr-6 border-4 border-indigo-500">
                <img
                  className="object-cover w-full h-full"
                  src={user.avatar}
                  alt={`${user.name} avatar`}
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
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
