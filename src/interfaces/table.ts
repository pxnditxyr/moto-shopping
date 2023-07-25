interface IDataTable {
  [ key : string ]: string | number | null | boolean
}

interface IFormStructure {
  type: string
  label: string
  name: string
  placeholder: string
  required?: boolean
  isMulti?: boolean
}
