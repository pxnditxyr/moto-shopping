export const capitalizeString = ( text : string ) : string => {
  return text.replace( /(^|\s)\S/g, ( match ) => {
    return match.toLocaleUpperCase();
  } );
}
