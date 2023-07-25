import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../interfaces';

interface AuthState {
  status: 'checking' | 'authenticated' | 'not-authenticated';
  user: IUser;
  errorMessage: string | Array<string> | undefined;
}

const initialState : AuthState = {
  status: 'checking',
  user: {} as IUser,
  errorMessage: undefined,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onChecking: ( state ) => {
      state.status = 'checking';
      state.user = {} as IUser;
    },
    onSignIn: ( state, { payload } ) => {
      state.status = 'authenticated';
      state.user = payload;
      state.errorMessage = undefined;
    },
    onSignOut: ( state, { payload } ) => {
      state.status = 'not-authenticated';
      state.user = {} as IUser;
      state.errorMessage = payload;
    },
    onSignUp: ( state, { payload } ) => {
      state.status = 'authenticated';
      state.user = payload;
      state.errorMessage = undefined;
    },
    onUpdateProfile: ( state, { payload } ) => {
      state.user = payload;
    },
    onChangeErrorMessage: ( state, { payload } ) => {
      state.errorMessage = payload;
    },
    clearErrorMessage: ( state ) => {
      state.errorMessage = undefined;
    }
  }
})

export const {
  onChecking,
  onSignIn,
  onSignOut,
  onChangeErrorMessage,
  clearErrorMessage
} = authSlice.actions;
