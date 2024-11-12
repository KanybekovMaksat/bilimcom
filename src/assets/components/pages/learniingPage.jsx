import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';

const videos = [
  {
    id: 1,
    title: 'HTML5 для начинающих / Урок #1',
    icon: <FaHtml5 className="text-red-500 text-3xl" />,
    url: 'https://www.youtube.com/embed/_R5a-Kc0pRc',
  },
  {
    id: 2,
    title: 'HTML5 для начинающих / Урок #2',
    icon: <FaHtml5 className="text-red-500 text-3xl" />,
    url: 'https://www.youtube.com/embed/YzYkebeN7mg',
  },
  {
    id: 3,
    title: 'HTML5 для начинающих / Урок #3',
    icon: <FaHtml5 className="text-red-500 text-3xl" />,
    url: 'https://www.youtube.com/embed/3V4qHup5BB8',
  },
  {
    id: 4,
    title: 'HTML5 для начинающих / Урок #4',
    icon: <FaHtml5 className="text-red-500 text-3xl" />,
    url: 'https://www.youtube.com/embed/6RoXrWu2EuM',
  },
  {
    id: 5,
    title: 'HTML5 для начинающих / Урок #5',
    icon: <FaHtml5 className="text-red-500 text-3xl" />,
    url: 'https://www.youtube.com/embed/ow3LCjZTbsY',
  },
];


const Learning = () => {
  return (
    <div className="min-h-full relative ml-4 sm:ml-6 sm:mt-20 sm:pt-16 md:ml-10 md:mt-8 flex flex-col items-center text-white py-5 sm:py-8 md:py-10">
      {videos.map((video, index) => (
        <motion.div
          key={video.id}
          className="relative w-full max-w-xs sm:max-w-md md:max-w-4xl mb-6 sm:mb-8 md:mb-10 bg-gray-800 rounded-lg p-4 sm:p-5 md:p-6 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.3 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 flex items-center space-x-2 sm:space-x-3">
            {video.icon}
            <span>{video.title}</span>
          </h1>
          <iframe
            className="w-full h-52 sm:h-64 md:h-80 rounded-md"
            src={video.url}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      ))}
    </div>
  );
};

export default Learning;
