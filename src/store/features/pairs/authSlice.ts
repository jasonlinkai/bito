import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store";
import { Auth } from "@/interfaces";

// Define a type for the slice state
interface AuthState {
  data: Auth;
  isLoading: boolean;
  error: Error | null;
}

// Define the initial state using that type
const initialState: AuthState = {
  data: {
    username: "",
    user_id: "",
  },
  isLoading: true,
  error: null,
};

export const authSlice = createSlice({
  name: "Auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setPairs: (state, action: PayloadAction<AuthState["data"]>) => {
      state.data = action.payload;
    },
    setLoading: (state, action: PayloadAction<AuthState["isLoading"]>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<AuthState["error"]>) => {
      state.error = action.payload;
    },
  },
});

export const { setPairs, setLoading, setError } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAuth = (state: RootState) => state.auth.data;

export default authSlice.reducer;
