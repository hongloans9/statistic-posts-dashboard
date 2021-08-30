import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");

const initialState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {},
});

const postsReducer = postsSlice.reducer;

const selectPosts = (state: { posts: { posts: any } }) => state.posts.posts;

export { selectPosts, postsReducer };
