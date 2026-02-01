import { Routes } from '@angular/router'
import { paths } from './constants/paths'

export const appRoutes: Routes = [
  {
    path: paths.HOME,
    loadComponent: () =>
      import('./pages/home-page/home-page.component').then(
        (m) => m.HomePageComponent,
      ),
  },
  {
    path: paths.NOT_FOUND,
    loadComponent: () =>
      import('./pages/not-found/not-found').then((m) => m.NotFoundPage),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found').then((m) => m.NotFoundPage),
  },
]
