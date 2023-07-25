import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth'
import { articleSlice } from './articles/articlesSlice';
import { categorySlice } from './categories';
import { uiSlice } from './ui';
import { stationSlice } from './stations/stationSlice';
import { callSlice } from './calls';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    article: articleSlice.reducer,
    category: categorySlice.reducer,
    station: stationSlice.reducer,
    call: callSlice.reducer,
    ui: uiSlice.reducer,
  },
  middleware: ( getDefaultMiddleware ) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
