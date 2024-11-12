import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './assets/components/navbar';
import Profile from './assets/components/pages/profile';
import Rankings from './assets/components/pages/rankings';
import Learning from './assets/components/pages/learniingPage'
import { Login } from './assets/components/login';
import Register from './assets/components/pages/registerPage';
import LessonPage from './assets/components/pages/lessonsPages/lessonPage';
import Lessons from './assets/components/pages/lessonsPages/lessons';
import { useDispatch } from 'react-redux';
import { initializeUser } from './store/slices/userSlice'

const App = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        try {
            const savedAuth = localStorage.getItem('isAuthenticated');
            return savedAuth !== null ? JSON.parse(savedAuth) : false;
        } catch (error) {
            console.error("Failed to parse isAuthenticated from localStorage:", error);
            return false;
        }
    });

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
            setIsAuthenticated(true);
        } else {
            localStorage.setItem('lessonProgress', '1');
        }
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
    }, [isAuthenticated]);

    const updateAuthentication = (auth) => {
        setIsAuthenticated(auth);
    };

    const handleLogout = () => {
        updateAuthentication(false);
        localStorage.removeItem('user');
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('lessonProgress');
        navigate('/login');
    };

    const handleLessonComplete = (lessonId) => {
        const newCompletedLesson = Number(lessonId) + 1;
        setCompletedLesson(newCompletedLesson);
        localStorage.setItem('lessonProgress', newCompletedLesson);
    };

    const ProtectedRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    };

    const showNavbar = isAuthenticated && !location.pathname.startsWith('/lessons/');

    const routes = [
        { path: "/profile", element: <ProtectedRoute><Profile /></ProtectedRoute> },
        { path: "/rankings", element: <ProtectedRoute><Rankings /></ProtectedRoute> },
        { path: "/learning", element: <ProtectedRoute><Learning /></ProtectedRoute> },
        { path: "/login", element: <Login updateAuthentication={updateAuthentication} /> },
        { path: "/register", element: <Register updateAuthentication={updateAuthentication} /> },
        { path: "/lessons", element: <ProtectedRoute><Lessons completedLesson={completedLesson} /></ProtectedRoute> },
        { path: "/lessons/:lessonId", element: <ProtectedRoute><LessonPage onLessonComplete={handleLessonComplete} /></ProtectedRoute> },
        { path: "*", element: <Navigate to={isAuthenticated ? '/profile' : '/login'} /> },
    ];

    return (
        <div className="flex min-h-screen bg-slate-900">
            {showNavbar && <Navbar onLogout={handleLogout} />}
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

