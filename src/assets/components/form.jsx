import React, { useState } from 'react';

const Form = ({ title, handleClick, setNickname }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleClick(email, password);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
            
            {title === "Register" && (
                <label className="block text-gray-700 font-medium mb-2">
                    Никнейм:
                    <input
                        type="text"
                        onChange={(e) => setNickname(e.target.value)}
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </label>
            )}

            <label className="block text-gray-700 font-medium mb-2">
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    required
                />
            </label>

            <label className="block text-gray-700 font-medium mb-4">
                Пароль:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    required
                />
            </label>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300"
            >
                {title}
            </button>
        </form>
    );
};

export { Form };
