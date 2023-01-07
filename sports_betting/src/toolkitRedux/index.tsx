import { configureStore } from "@reduxjs/toolkit";
import red from "./toolkitReducer";
const store = configureStore({
  reducer: red,
});
export default store;
