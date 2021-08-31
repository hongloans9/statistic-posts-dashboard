import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { postsReducer } from "../features/dashboard/postsSlice";
import { userReducer } from "../features/usersPosts/userSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
