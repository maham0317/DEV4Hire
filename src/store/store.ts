import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { apiService } from "../services/api";

import authReducer from './auth/slice';
import { TypedUseSelectorHook, useSelector } from "react-redux";

// Combine reducers
const reducers = combineReducers({
  [apiService.reducerPath]: apiService.reducer,
  auth: authReducer
});

// Configure store
const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(apiService.middleware);
    return middlewares;
  },
});

// Export types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export { store };
