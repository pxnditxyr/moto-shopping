import { createSlice } from '@reduxjs/toolkit';
import { IArticle } from '../../interfaces';

interface IInitialState {
  articles: IArticle[]
  activeArticle: IArticle | null
  isLoadingArticles: boolean
}

const initialState : IInitialState = {
  activeArticle: null,
  articles: [],
  isLoadingArticles: true,
}

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    onAddNewArticle: ( state, { payload } ) => {
      state.articles.push( payload );
      state.activeArticle = null;
    },
    onSetActiveArticle: ( state, { payload } ) => {
      state.activeArticle = payload;
    },
    onUpdatedArticle: ( state, { payload } ) => {
      state.articles = state.articles.map( ( article ) => article.id === payload.id ? payload : article );
      state.activeArticle = null;
    },
    onDeleteArticle: ( state, { payload } ) => {
      state.articles = state.articles.filter( ( article ) => article.id !== payload.id );
      state.activeArticle = null;
    },
    onLoadingArticles: ( state, { payload } ) => {
      state.isLoadingArticles = false;
      payload.forEach( ( article : IArticle ) => {
        const exists = state.articles.some( ( dbArticle ) => dbArticle.id === article.id );
        if ( !exists )
          state.articles.push( article );
      });
    },
    onSignOutArticles: ( state ) => {
      state.activeArticle = null;
      state.articles = [];
      state.isLoadingArticles = true;
    }
  }
});

export const {
  onAddNewArticle,
  onDeleteArticle,
  onLoadingArticles,
  onSetActiveArticle,
  onSignOutArticles,
  onUpdatedArticle,
} = articleSlice.actions;
