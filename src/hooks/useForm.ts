import { ChangeEvent, useState } from 'react'

export const useForm = <T> ( initialValues : T ) => {
  const [ formState, setFormState ] = useState<T>( initialValues )

  const onInputChange = ( { target } : ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [ name ]: value
    })
  }

  const onSelectChange = ( { target } : ChangeEvent<HTMLSelectElement> ) => {
    console.log( `target`, target )
    const { name, value } = target
    setFormState({
      ...formState,
      [ name ]: value
    })
  }

  const onResetForm = () => {
    setFormState( initialValues )
  }

  const setNewFormState = ( newFormState : T ) => {
    setFormState({ ...newFormState })
  }

  return {
    form: formState,
    onInputChange,
    onResetForm,
    onSelectChange,
    setNewFormState,
    ...formState
  }
}
