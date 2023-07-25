import { createSlice } from '@reduxjs/toolkit';
import { IStation } from '../../interfaces';

interface IInitialState {
  stations: IStation[]
  activeStation: IStation | null
  isLoadingStations: boolean
}

const initialState : IInitialState = {
  activeStation: null,
  stations: [],
  isLoadingStations: true,
}

export const stationSlice = createSlice({
  name: 'station',
  initialState,
  reducers: {
    onAddNewStation: ( state, { payload } ) => {
      state.stations.push( payload );
      state.activeStation = null;
    },
    onSetActiveStation: ( state, { payload } ) => {
      state.activeStation = payload;
    },
    onUpdatedStation: ( state, { payload } ) => {
      state.stations = state.stations.map( ( station ) => station.id === payload.id ? payload : station );
      state.activeStation = null;
    },
    onDeleteStation: ( state, { payload } ) => {
      state.stations = state.stations.filter( ( station ) => station.id !== payload.id );
      state.activeStation = null;
    },
    onLoadingStations: ( state, { payload } ) => {
      state.isLoadingStations = false;
      payload.forEach( ( station : IStation ) => {
        const exists = state.stations.some( ( dbStation ) => dbStation.id === station.id );
        if ( !exists )
          state.stations.push( station );
      });
    },
    onSignOutStations: ( state ) => {
      state.activeStation = null;
      state.stations = [];
      state.isLoadingStations = true;
    }
  }
});

export const {
  onAddNewStation,
  onDeleteStation,
  onLoadingStations,
  onSetActiveStation,
  onSignOutStations,
  onUpdatedStation,
} = stationSlice.actions;

