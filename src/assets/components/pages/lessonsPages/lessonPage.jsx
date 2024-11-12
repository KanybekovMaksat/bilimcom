import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Questions from "./questions";
import { useDispatch, useSelector } from "react-redux";
import { updateProgress } from "../../../../store/slices/userSlice";
import updateLessonProgress from "../../../../firebase";

const LessonPage = ({ onLessonComplete }) => {
  const { lessonId } = useParams();
  const lessonIndex = parseInt(lessonId, 10);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isLessonCompleted, setIsLessonCompleted] = useState(false);

  const currentLesson = Questions[lessonIndex];
  const currentQuestion = currentLesson.questions[currentQuestionIndex];

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === currentQuestion.correctAnswer);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    if (currentQuestionIndex < currentLesson.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsLessonCompleted(true);
      onLessonComplete(lessonId);

      const newProgress = lessonIndex + 1;
      dispatch(updateProgress({ completedLesson: newProgress }));
      updateLessonProgress(user.uid, { completedLesson: newProgress });
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-2xl font-bold text-white">{currentLesson.title}</h1>
      <div className="mt-4 flex flex-col items-center">
        {!isLessonCompleted ? (
          <>
            <p className="text-white">
              Вопрос {currentQuestionIndex + 1} из{" "}
              {currentLesson.questions.length}
            </p>
            <h2 className="text-xl text-white">{currentQuestion.question}</h2>
            <div className="mt-3 grid grid-rows-2 grid-cols-2 ">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  className={`m-3 p-5 border rounded ${
                    selectedAnswer === option
                      ? isCorrect
                        ? "bg-green-500"
                        : "bg-red-500"
                      : "bg-gray-300"
                  }`}
                  onClick={() => handleAnswerClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            {selectedAnswer && (
              <div className="mt-4 text-center">
                {isCorrect ? (
                  <p className="text-green-600">Правильно!</p>
                ) : (
                  <p className="text-red-600">
                    Неправильно! Правильный ответ:{" "}
                    {currentQuestion.correctAnswer}
                  </p>
                )}
                <button
                  className="mt-2 p-2 bg-blue-500 text-white rounded"
                  onClick={handleNextQuestion}
                >
                  Следующий вопрос
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="mt-4 flex flex-col text-center">
            <p className="text-green-600">Вы прошли все вопросы!</p>
            <Link
              to="/lessons"
              className="mt-2 p-2 bg-blue-500 text-white rounded"
            >
              Завершить урок
            </Link>
          </div>
        )}
      </div>
      <Link to="/lessons" className="mt-4 text-blue-600">
        Вернуться к урокам
      </Link>
    </div>
  );
};

export default LessonPage;
