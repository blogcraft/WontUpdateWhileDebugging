import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import(`./modules/signed-out-module/signed-out.routes`).then(
        (m) => m.signedOutRoutes,
      ),
  },
  { path: '**', component: PageNotFoundComponent },
];
