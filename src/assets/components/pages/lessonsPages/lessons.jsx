import React from "react";
import { Link, useNavigate } from "react-router-dom";

const leftImage =
  "https://cdn0.iconfinder.com/data/icons/editorial-darkmode/24/editorial_html-512.png";
const rightImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png";

const Lesson = ({ completedLesson }) => {
  const lessons = [
    { label: "1", path: "/lessons/0", description: "Введение в HTML" },
    { label: "2", path: "/lessons/1", description: "Основы HTML" },
    { label: "3", path: "/lessons/2", description: "Структура страницы" },
    { label: "4", path: "/lessons/3", description: "Семантические теги" },
    { label: "5", path: "/lessons/4", description: "CSS Основы" },
    { label: "6", path: "/lessons/5", description: "Стилизация с помощью CSS" },
    { label: "7", path: "/lessons/6", description: "Flexbox и Grid" },
  ];

  const navigate = useNavigate();

  const handleLessonClick = (index) => {
    if (index <= completedLesson) {
      navigate(`/lessons/${index}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 sm:gap-8 md:py-8 md:pl-64 max-sm:pb-[20%] px-4 sm:px-8 md:px-12 relative">
      <div className="absolute max-sm:right-1 inset-0 bg-gradient-to-br from-teal-950 to-teal-1000 opacity-50 animate-gradient bg-[length:200%_200%]"></div>

      <div className="flex flex-col sm:flex-row items-center justify-center w-full z-10 relative gap-6 sm:gap-8">
        <img
          src={leftImage}
          alt="Left Decoration"
          className="w-20 h-20 absolute sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover translate-x-[150px] translate-y-[200px] sm:translate-x-[-150px] sm:translate-y-[-180px] max-sm:translate-x-[100px] transition-transform transform hover:scale-110"
        />

        <div className="flex flex-col items-center gap-4 sm:gap-6">
          {lessons.map((lesson, index) => {
            let buttonClass;
            if (index < completedLesson) {
              buttonClass = "bg-blue-500";
            } else if (index === completedLesson) {
              buttonClass = "bg-green-500";
            } else {
              buttonClass = "bg-gray-600";
            }

            return (
              <div key={lesson.label} className="text-center max-sm:mt-10 ">
                <button
                  onClick={() => handleLessonClick(index)}
                  className={`w-14 h-14  sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full ${buttonClass} shadow-lg transform transition-all 
                  ${index === completedLesson ? "shadow-green-400 scale-110" : "shadow-gray-400 scale-100"} 
                  text-xl sm:text-2xl md:text-3xl text-white flex items-center justify-center 
                  hover:scale-110 hover:shadow-xl`}
                  style={{ transform: `translate(${Math.sin(index) * 90}px)` }}
                >
                  {index < completedLesson
                    ? "✓"
                    : index === completedLesson
                    ? "⭐"
                    : "★"}
                </button>
                <p
                  className="mt-2 text-gray-300 text-xs sm:text-sm md:text-base"
                  style={{ transform: `translate(${Math.sin(index) * 100}px)` }}
                >
                  {lesson.description}
                </p>
              </div>
            );
          })}
        </div>

        <img
          src={rightImage}
          alt="Right Decoration"
          className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 object-cover translate-x-[-150px] translate-y-[-100px] sm:translate-x-[250px] sm:translate-y-[200px] transition-transform transform hover:scale-110"
        />
      </div>
    </div>
  );
};

export default Lesson;
