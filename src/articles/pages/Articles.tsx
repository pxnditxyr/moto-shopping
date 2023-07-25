
import { useEffect } from 'react'
import { useArticleStore, useAuthStore } from '../../hooks'
import { CrudTable } from '../../private'
import { Loading } from '../../pages'
import { IArticle } from '../../interfaces'
import { Navigate } from 'react-router-dom'


const header = [
  {
    title: 'ID',
    key: 'id',
  },
  {
    title: 'Nombre',
    key: 'name',
  },
  {
    title: 'Descripción',
    key: 'description',
  },
  {
    title: 'Precio',
    key: 'price',
  },
  {
    title: 'Cantidad',
    key: 'stock'
  },
  {
    title: 'Codigo',
    key: 'code'
  },
  {
    title: 'Categoria',
    key: 'category'
  },
  {
    title: 'Usuario',
    key: 'user',
  },
]

const formStructure = [
  {
    type: 'text',
    name: 'name',
    label: 'Nombre',
    placeholder: 'Nombre del articulo',
    required: true,
  },
  {
    type: 'text',
    name: 'description',
    label: 'Descripción',
    placeholder: 'Descripción del articulo',
    required: true,
  },
  {
    type: 'number',
    name: 'price',
    label: 'Precio',
    placeholder: 'Precio de articulo',
    required: true,
  },
  {
    type: 'number',
    name: 'stock',
    label: 'Cantidad',
    placeholder: 'Cantidad de articulos',
    required: true,
  },
  {
    type: 'text',
    name: 'code',
    label: 'Codigo',
    placeholder: 'Codigo del articulo',
    required: true,
  },
  {
    type: 'text',
    name: 'category',
    label: 'Categoria',
    placeholder: 'Categoría del articulo',
    required: true,
  },
]

const newInitialForm = {
  name: '',
  description: '',
  price: 0,
  stock: 0,
  code: '',
  category: '',
}

export const Articles = () => {

  const { user } = useAuthStore()
  const { articles, startLoadingArticles, isLoadingArticles, startSavingArticle, startDeletingArticle, onActiveArticle, activeArticle } = useArticleStore()

  if ( user.role !== 'admin' ) {
    return <Navigate to="/me" />
  }

  useEffect( () => {
    startLoadingArticles()
  }, [] )

  const onSelect = ( article : IDataTable, action : string ) => {
    if ( article )
      onActiveArticle( article as unknown as IArticle )
    if ( action === 'delete' )
      startDeletingArticle( article as unknown as IArticle )
  }

  const setActiveCatgeroyNull = () => {
    onActiveArticle( null )
  }

  return (
    <div className="w-full h-screen flex flex-col items-center gap-4 px-4 py-8" >
      <h1 className="text-5xl font-bold mt-8 text-white" > Artículos </h1>
      {
        ( isLoadingArticles )
          ? <Loading />
          : <CrudTable
              data={ articles as unknown as any }
              header={ header } onSelect={ onSelect }
              newInitialForm={ newInitialForm }
              activeItem={ activeArticle as unknown as IDataTable }
              formStructure={ formStructure }
              startSavingItem={ startSavingArticle as unknown as ( item : IDataTable ) => void }
              setActiveItemNull={ setActiveCatgeroyNull }
            />
      }
    </div>
  )
}
