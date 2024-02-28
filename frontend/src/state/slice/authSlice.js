import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [], // Изначально значение токена пустое
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.value = action.payload; // Устанавливаем значение токена из action.payload
    },
    clearToken: (state) => {
      state.value = ''; // Очищаем значение токена
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;