import { createSlice } from "@reduxjs/toolkit";

export interface Post {
  created_time: string;
  from_id: string;
  from_name: string;
  id: string;
  message: string;
  type: string;
}

// Define a type for the slice state
interface PostsState {
  posts: Post[];
}

// Define the initial state using that type
const initialState: PostsState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    getAllposts: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.posts = action.payload;
    },
  },
});

const { getAllposts } = postsSlice.actions;

const postsReducer = postsSlice.reducer;

const selectPosts = (state: { posts: { posts: any } }) => state.posts.posts;

export { getAllposts, selectPosts, postsReducer };
