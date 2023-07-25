// import Swal from 'sweetalert2';
// import { bomberosApi } from '../api';
import { IUser } from '../interfaces';
import { useAppDispatch, useAppSelector } from '../store';
import { clearErrorMessage, onChecking, onSignIn, onSignOut } from '../store/auth';

const users : IUser[] = []

export const useAuthStore = () => {

  const { status, user, errorMessage } = useAppSelector( state => state.auth );
  const dispatch = useAppDispatch();

  // const startSignIn = async ( { email, password } : { email: string, password: string } ) => {
  //
  //   dispatch( onChecking() )
  //
  //   try {
  //     const { data } = await bomberosApi.post( '/auth/signin', { email, password } );
  //     localStorage.setItem( 'token', data.token );
  //     localStorage.setItem( 'token-init-date', new Date().getTime().toString() );
  //     dispatch( onSignIn({
  //       id: data.id,
  //       lastName: data.lastName,
  //       name: data.name,
  //       phone: data.phone,
  //       dni: data.dni,
  //       civilStatus: data.civilStatus,
  //       gender: data.gender,
  //       birthDate: data.birthDate,
  //       email: data.email
  //     }) );
  //   } catch ( error : any ) {
  //     dispatch( onSignOut( error.response.data.message ) );
  //     setTimeout( () => {
  //       dispatch( clearErrorMessage() );
  //     }, 1 );
  //   }
  // }
  //
  // const startSignUp = async ( { lastName, name, phone, dni, civilStatus, gender, birthDate, email, password } : IUser ) => {
  //   dispatch( onChecking() );
  //   try {
  //     const response = await bomberosApi.post( '/auth/signup', {
  //       lastName, name, phone, dni,
  //       civilStatus, gender, birthDate,
  //       email, password
  //     } );
  //
  //     
  //     const { data } = response
  //
  //     localStorage.setItem( 'token', data.token );
  //     localStorage.setItem( 'token-init-date', new Date().getTime().toString() );
  //     
  //     dispatch( onSignIn({
  //       id: data.id,
  //       lastName: data.lastName,
  //       name: data.name,
  //       phone: data.phone,
  //       dni: data.dni,
  //       civilStatus: data.civilStatus,
  //       gender: data.gender,
  //       birthDate: data.birthDate,
  //       email: data.email
  //     }) );
  //   } catch ( error : any ) {
  //     dispatch( onSignOut( error.response.data.message ) );
  //     setTimeout( () => {
  //       dispatch( clearErrorMessage() );
  //     }, 1 );
  //     
  //   }
  // };
  //
  // const checkAuthToken = async () => {
  //   const token = localStorage.getItem( 'token' );
  //   if ( !token ) {
  //     dispatch( onSignOut( undefined ) );
  //     return;
  //   }
  //   try {
  //     const { data } = await bomberosApi.get( '/auth/check-auth-status' );
  //     localStorage.setItem( 'token', data.token );
  //     localStorage.setItem( 'token-init-date', new Date().getTime().toString() );
  //     dispatch( onSignIn({
  //       id: data.id,
  //       lastName: data.lastName,
  //       name: data.name,
  //       phone: data.phone,
  //       dni: data.dni,
  //       civilStatus: data.civilStatus,
  //       gender: data.gender,
  //       birthDate: data.birthDate,
  //       email: data.email
  //     }) );
  //
  //   } catch ( error : any ) {
  //     localStorage.removeItem( 'token' );
  //     localStorage.removeItem( 'token-init-date' );
  //     dispatch( onSignOut( undefined ) );
  //   }
  // }
  //
  const startSignOut = () => {
    localStorage.removeItem( 'token' );
    localStorage.removeItem( 'token-init-date' );
    dispatch( onSignOut( undefined ) );
  }

  const startSignIn = async ( { email, password } : { email: string, password: string } ) => {

    dispatch( onChecking() )

    try {
      // const { data } = await bomberosApi.post( '/auth/signin', { email, password } );
      const data = users.find( user => user.email === email && user.password === password )
      if ( data === undefined ) throw new Error( 'Usuario o contraseña incorrectos' )
      localStorage.setItem( 'token', data.email );
      dispatch( onSignIn({
        id: data.id,
        lastName: data.lastName,
        name: data.name,
        phone: data.phone,
        dni: data.dni,
        civilStatus: data.civilStatus,
        gender: data.gender,
        birthDate: data.birthDate,
        email: data.email
      }) );
    } catch ( error : any ) {
      dispatch( onSignOut( error.response.data.message ) );
      setTimeout( () => {
        dispatch( clearErrorMessage() );
      }, 1 );
    }
  }

  const startSignUp = async ( { lastName, name, phone, dni, civilStatus, gender, birthDate, email, password } : IUser ) => {
    dispatch( onChecking() );
    try {
      const newUser = {
        lastName, name, phone, dni,
        civilStatus, gender, birthDate,
        email, password,
        id: String( users.length + 1 ),
        role: 'USER_ROLE',
        state: true
      }

      users.push( newUser )
      const data = newUser

      localStorage.setItem( 'token', data.email );
      
      dispatch( onSignIn({
        id: data.id,
        lastName: data.lastName,
        name: data.name,
        phone: data.phone,
        dni: data.dni,
        civilStatus: data.civilStatus,
        gender: data.gender,
        birthDate: data.birthDate,
        email: data.email
      }) );
    } catch ( error : any ) {
      dispatch( onSignOut( error.response.data.message ) );
      setTimeout( () => {
        dispatch( clearErrorMessage() );
      }, 1 );
      
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem( 'token' );
    if ( !token ) {
      dispatch( onSignOut( undefined ) );
      return;
    }
    try {
      // const { data } = await bomberosApi.get( '/auth/check-auth-status' );
      const data = users.find( user => user.email === token )
      if ( data === undefined ) throw new Error( 'Usuario o contraseña incorrectos' )
      localStorage.setItem( 'token', data.email );
      dispatch( onSignIn({
        id: data.id,
        lastName: data.lastName,
        name: data.name,
        phone: data.phone,
        dni: data.dni,
        civilStatus: data.civilStatus,
        gender: data.gender,
        birthDate: data.birthDate,
        email: data.email
      }) );

    } catch ( error : any ) {
      localStorage.removeItem( 'token' );
      dispatch( onSignOut( undefined ) );
    }
  }

  return {
    checkAuthToken,
    errorMessage,
    startSignIn,
    startSignOut,
    startSignUp,
    status,
    user,
  }
};
