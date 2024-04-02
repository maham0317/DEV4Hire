import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import award from "@/store/award";
import workRole from "@/store/work-roles";
import industrytype from "@/store/industry-type";
import { educationTypeApi } from "../services/education-type";

// Combine reducers
const reducers = combineReducers({
  award,
  workRole,
  industrytype,
  [educationTypeApi.reducerPath]: educationTypeApi.reducer,
});

// Configure store
const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(educationTypeApi.middleware);
    return middlewares;
  },
});
setupListeners(store.dispatch);

// Export types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
