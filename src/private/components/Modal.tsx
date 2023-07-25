import { useEffect } from 'react'
import { useUiStore } from '../../hooks'

interface IProps {
  title: string
  children: JSX.Element | JSX.Element[]
  onClose: () => void
}

export const Modal = ( { children, title, onClose } : IProps ) => {

  const { isDateModalOpen, closeDateModal } = useUiStore()

  useEffect( () => {
    if ( !isDateModalOpen )
      onClose()
  }, [ isDateModalOpen ] )

  return (
    <div id="authentication-modal" tab-index="-1" aria-hidden className={ `fixed top-0 left-0 right-0 z-50 w-full p-4 flex flex flex-col items-center justify-center overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] h-screen ${ isDateModalOpen ? 'block' : 'hidden' } bg-gray-700 bg-opacity-70` }>
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative rounded-lg shadow bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white"
            data-modal-hide="authentication-modal"
            onClick={ () => closeDateModal() }
          >
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-white"> { title } </h3>
            { children }
          </div>
        </div>
      </div>
    </div> 
  )
}
