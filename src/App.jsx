import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './assets/components/navbar';
import Profile from './assets/components/pages/profile';
import Rankings from './assets/components/pages/rankings';
import Learning from './assets/components/pages/learniingPage';
import LessonPage from './assets/components/pages/lessonsPages/lessonPage';
import Lessons from './assets/components/pages/lessonsPages/lessons';
import { useDispatch } from 'react-redux';
import { initializeUser } from './store/slices/userSlice';
import Register from './assets/components/pages/registerPage';

const App = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [completedLesson, setCompletedLesson] = useState(() => {
        try {
            const savedProgress = localStorage.getItem('lessonProgress');
            return savedProgress !== null ? Number(savedProgress) : 1;
        } catch (error) {
            console.error("Failed to parse lessonProgress from localStorage:", error);
            return 1;
        }
    });

    useEffect(() => {
        const userFromStorage = JSON.parse(localStorage.getItem('user'));
        if (userFromStorage) {
            dispatch(initializeUser(userFromStorage));
        }
        localStorage.setItem('lessonProgress', '1');
    }, [dispatch]);

    const handleLessonComplete = (lessonId) => {
        const newCompletedLesson = Number(lessonId) + 1;
        setCompletedLesson(newCompletedLesson);
        localStorage.setItem('lessonProgress', newCompletedLesson);
    };

    const showNavbar = !location.pathname.startsWith('/lessons/');

    const routes = [
        { path: "/profile", element: <Profile /> },
        { path: "/rankings", element: <Rankings /> },
        { path: "/learning", element: <Learning /> },
        { path: "/lessons", element: <Lessons completedLesson={completedLesson} /> },
        { path: "/lessons/:lessonId", element: <LessonPage onLessonComplete={handleLessonComplete} /> },
        { path: "*", element: <Profile /> },
        { path: 'register', element: <Register/> }
    ];

    return (
        <div className="flex min-h-screen bg-slate-900">
            {showNavbar && <Navbar />}
            <div className="flex-grow bg-gradient-to-r from-slate-900 to-slate-800">
                <Routes>
                    {routes.map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            </div>
        </div>
    );
};

export default App;
