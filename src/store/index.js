import { combineReducers, createStore } from "redux";
import { authSlice } from "./auth/AuthSlice";

import { todoSlice } from "./todo/TodoSlice";

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [todoSlice.name]: todoSlice.reducer,
});

export const store = createStore(rootReducer);

store.subscribe(() => {
  console.log("store render");
});
