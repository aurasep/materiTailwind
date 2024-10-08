import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducer/themeReducer";
import langReducer from "./reducer/langReducer";
import { userReducer } from "./action/userAction";
import detailRestoReducer from "./reducer/DetailRestoReducer";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    lang: langReducer,
    user: userReducer,
    detailResto: detailRestoReducer,
  },
});

export default store;