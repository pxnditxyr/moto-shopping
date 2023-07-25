import { INavbarLinks } from '../../interfaces';

export const navbarLinksPublic : INavbarLinks[] = [
  {
    to: '/',
    name: 'Inicio'
  },
  {
    to: 'tienda',
    name: 'Tienda'
  },
  {
    to: 'direction',
    name: 'Ubicacion'
  },
  {
    to: '/auth/signin',
    name: 'Iniciar Sesion',
    exact: true
  },
]
