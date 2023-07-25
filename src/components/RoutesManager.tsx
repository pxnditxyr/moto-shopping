import { Route, Routes } from 'react-router-dom'
import { IRoute } from '../interfaces'
import { NotFound } from '../pages'

interface IProps {
  routes: IRoute[],
  notUseNotFound?: boolean,
  children?: JSX.Element | JSX.Element[]
}

export const RoutesManager = ( { routes, children, notUseNotFound } : IProps ) => {
  return (
    <Routes>
      {
        routes.map( ( { path, Component, children } ) => (
          <Route key={ path } path={ path } element={
            children ? (
              <Routes>
                {
                  children.map( ( { path, Component } ) => (
                    <Route key={ path } path={ path } element={ Component && <Component /> } />
                  ) )
                }
                <Route path="*" element={ <NotFound /> } />
              </Routes>
            ) : (
              <>
                { Component && <Component /> }
              </>
            )
          } />
        ) )
      }

      { children && children }

      { !notUseNotFound && <Route path="*" element={ <NotFound /> } /> }
    </Routes>
  )
}
