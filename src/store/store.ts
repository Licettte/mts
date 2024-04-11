import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import gameReducer from './sliceGameCard.ts'

export const store = configureStore({
  reducer: {
    game: gameReducer,
    // message: messageReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
