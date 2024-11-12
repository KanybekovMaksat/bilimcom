import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  uid: null,
  token: null,
  nickname: null,
  completedLesson: 1,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Действие для установки пользователя в стейт
    setUser(state, action) {
      const { uid, email, token, nickname, completedLesson } = action.payload;
      state.uid = uid;
      state.email = email;
      state.token = token;
      state.nickname = nickname || ''; // Убедитесь, что nickname всегда есть
      state.completedLesson = completedLesson || 1; // Устанавливаем progress, если он есть
    },    
    
    // Действие для удаления пользователя
    removeUser(state) {
      state.uid = null;
      state.email = null;
      state.token = null;
      state.nickname = null;
      state.completedLesson = 1; // сброс прогресса при выходе
    },

    // Инициализация пользователя при первой загрузке или воссоздании сессии
    initializeUser(state, action) {
      const { uid, email, token, nickname, completedLesson } = action.payload;
      state.uid = uid;
      state.email = email;
      state.token = token;
      state.nickname = nickname || ''; // Никнейм, если он есть
      state.completedLesson = completedLesson || 1; // Прогресс пользователя
    },

    // Обновление прогресса пользователя
    updateProgress(state, action) {
      state.completedLesson = action.payload.completedLesson;
    },
  },
});

export const { setUser, removeUser, initializeUser, updateProgress } = userSlice.actions;
export default userSlice.reducer;
