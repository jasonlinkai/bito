import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/pairs/authSlice";
import { pairsApi } from "@/utils/http";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      // Add the generated reducer as a specific top-level slice
      [pairsApi.reducerPath]: pairsApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(pairsApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
