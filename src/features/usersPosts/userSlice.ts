import { createSlice } from "@reduxjs/toolkit";

export interface User {
  id: string;
  name: string;
  totalPosts: number;
}
interface UserState {
  users: User[];
  selectedUser: string;
}

const initialState: UserState = {
  users: [],
  selectedUser: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
});

const { getUsers, setSelectedUser } = userSlice.actions;

const userReducer = userSlice.reducer;

const selectUsers = (state: { user: { users: any } }) => state.user.users;
const selectSelesctedUser = (state: { user: { selectedUser: any } }) =>
  state.user.selectedUser;

export {
  getUsers,
  setSelectedUser,
  selectUsers,
  selectSelesctedUser,
  userReducer,
};
