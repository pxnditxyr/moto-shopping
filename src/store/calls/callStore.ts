import { createSlice } from '@reduxjs/toolkit';
import { ICall } from '../../interfaces';

interface IInitialState {
  calls: ICall[]
  activeCall: ICall | null
  isLoadingCalls: boolean
}

const initialState : IInitialState = {
  activeCall: null,
  calls: [],
  isLoadingCalls: true,
}

export const callSlice = createSlice({
  name: 'call',
  initialState,
  reducers: {
    onAddNewCall: ( state, { payload } ) => {
      state.calls.push( payload );
      state.activeCall = null;
    },
    onSetActiveCall: ( state, { payload } ) => {
      state.activeCall = payload;
    },
    onUpdatedCall: ( state, { payload } ) => {
      state.calls = state.calls.map( ( call ) => call.id === payload.id ? payload : call );
      state.activeCall = null;
    },
    onDeleteCall: ( state, { payload } ) => {
      state.calls = state.calls.filter( ( call ) => call.id !== payload.id );
      state.activeCall = null;
    },
    onLoadingCalls: ( state, { payload } ) => {
      state.isLoadingCalls = false;
      payload.forEach( ( call : ICall ) => {
        const exists = state.calls.some( ( dbCall ) => dbCall.id === call.id );
        if ( !exists )
          state.calls.push( call );
      });
    },
    onSignOutCalls: ( state ) => {
      state.activeCall = null;
      state.calls = [];
      state.isLoadingCalls = true;
    }
  }
});

export const {
  onAddNewCall,
  onDeleteCall,
  onLoadingCalls,
  onSetActiveCall,
  onSignOutCalls,
  onUpdatedCall,
} = callSlice.actions;
