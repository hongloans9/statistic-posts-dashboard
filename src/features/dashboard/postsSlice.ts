import { createSlice } from "@reduxjs/toolkit";
export interface Post {
  created_time: string;
  from_id: string;
  from_name: string;
  id: string;
  message: string;
  type: string;
}

interface PostsState {
  posts: Post[];
}

const initialState: PostsState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    getAllposts: (state, action) => {
      state.posts = [...state.posts, ...action.payload];
    },
  },
});

const { getAllposts } = postsSlice.actions;

const postsReducer = postsSlice.reducer;

const selectPosts = (state: { posts: { posts: any } }) => state.posts.posts;

export { getAllposts, selectPosts, postsReducer };
