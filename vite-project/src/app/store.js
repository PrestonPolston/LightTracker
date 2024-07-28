import { configureStore } from "@reduxjs/toolkit";
import { lightApi } from "../api/LightApi";

export const store = configureStore({
  reducer: {
    [lightApi.reducerPath]: lightApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(lightApi.middleware),
});

export default store;
