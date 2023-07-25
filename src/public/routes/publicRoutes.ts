import { IRoute } from '../../interfaces/routes.interface';
import { Store } from '../../store-module/pages/Store';
import {
  Home,
  Direction,
  About,
} from '../pages';

export const routes : IRoute[] = [
  {
    path: '/',
    Component: Home,
    description: 'Inicio',
    image: 'https://i.imgur.com/3Z0QW0n.jpg'
  },
  {
    path: '/about',
    Component: About,
    description: 'Acerca de',
    image: 'https://i.imgur.com/3Z0QW0n.jpg'
  },
  {
    path: '/direction',
    Component: Direction,
    description: 'Ubicacion',
    image: 'https://i.imgur.com/3Z0QW0n.jpg'
  },
  {
    path: '/tienda',
    Component: Store,
    description: 'Tienda',
  }
]


