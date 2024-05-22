import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import award from "@/store/award";
import workRole from "@/store/work-roles";
import { educationTypeApi } from "../services/education-type";
import skill from "@/store/skill";
import languages from "@/store/languages";
import proficiency from "@/store/proficiency";

// Combine reducers
const reducers = combineReducers({
  award,
  workRole,
  skill,
  languages,
  proficiency,
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
