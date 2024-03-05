import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { setupListeners } from "@reduxjs/toolkit/query";
import award from "./award";

const reducers = combineReducers({
  award,
});

const store = configureStore({
  reducer: award,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    });
    return middlewares;
  },
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
