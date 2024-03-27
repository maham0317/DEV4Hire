import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import award from "./award";
import workRole from "./roles";
import industrytype from "./industry-type";
import educationtype from "./education-type";

// Combine reducers
const reducers = combineReducers({
  award,
  workRole,
  industrytype,
  educationtype,
});

// Configure store
const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    });
    return middlewares;
  },
});
setupListeners(store.dispatch);

// Export types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
