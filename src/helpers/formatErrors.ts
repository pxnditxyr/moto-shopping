interface IErrors {
  [ key : string ] : {
    msg : string,
    param : string,
    location : string
  }
}

interface IData {
  errors? : IErrors
  msg? : string | {
    [ key : string ] : string
  }
}

export const formatErrors = ( data : IData ) => {
  const lineBreak = '<br />';
  if ( data.errors ) {
    const errorList = Object.values( data.errors ).map( ( error : any ) => error.msg );
    return errorList.join( lineBreak );
  } 

  if ( data.msg ) {
    if ( typeof data.msg === 'string' )
      return data.msg;
    const errorList = Object.values( data.msg ).map( ( error : any ) => error );
    return errorList.join( lineBreak );
  }
  return 'Unknown Error';
};
