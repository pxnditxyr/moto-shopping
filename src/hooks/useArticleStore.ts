import Swal from 'sweetalert2';
import { bomberosApi } from '../api';
import { IArticle } from '../interfaces';
import { useAppDispatch, useAppSelector } from '../store';
import { onAddNewArticle, onDeleteArticle, onSetActiveArticle, onUpdatedArticle, onLoadingArticles } from '../store/articles';

export const useArticleStore = () => {

  const { articles, activeArticle, isLoadingArticles } = useAppSelector( state => state.article );

  const dispatch = useAppDispatch();

  const onActiveArticle = ( article : IArticle | null ) => {
    dispatch( onSetActiveArticle( article ) );
  };

  const startSavingArticle = async ( article : IArticle ) => {
    try {
      const newArticle = {
        ...article,
        price: Number( article.price ),
        stock: Number( article.stock )
      }
      if ( article.id ) {
        const { id, ...updateArticle } = newArticle;
        const { data } = await bomberosApi.patch( `/articles/${ article.id }`, updateArticle );
        dispatch( onUpdatedArticle({
          ...newArticle,
          user: data.user.email
        }) );
        return;
      }

      const { data } = await bomberosApi.post( '/articles', newArticle )
      console.log( data )
      const { id, name, description, price, stock, code, category, user } = data
      dispatch( onAddNewArticle({
        id,
        name,
        description,
        price,
        stock,
        code,
        category: category.name,
        user: user.email
      }) )
    } catch ( error : any ) {
      Swal.fire( 'Error', String( error.response.data.message ), 'error' );
    }
    
  };

  const startDeletingArticle = async ( article : IArticle ) => {
    try {
      await bomberosApi.delete( `/articles/${ article.id }` );
      dispatch( onDeleteArticle( article ) );
    } catch ( error : any ) {
      Swal.fire( 'Error', error.response.data.message, 'error' );
    }
  };

  const startLoadingArticles = async () => {
    try {
      const { data } = await bomberosApi.get( '/articles' );
      const articles = data
      dispatch( onLoadingArticles( articles ) );
    } catch ( error : any ) {
      Swal.fire( 'Error', error.response.data.message, 'error' );
    }
  }

  return {
    articles,
    activeArticle,
    onActiveArticle,
    startSavingArticle,
    startDeletingArticle,
    startLoadingArticles,
    hasArticleSelected: !!activeArticle,
    isLoadingArticles
  }
};
