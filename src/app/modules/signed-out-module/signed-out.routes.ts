import { SignedOutComponent } from './signed-out.component';
import { SignInComponent } from './sign-in/sign-in.component';

import { Routes } from '@angular/router';

const signedOutRoutesCore: Routes = [
  {
    path: '',
    component: SignedOutComponent,
    children: [
      { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
      { path: 'sign-in', component: SignInComponent, title: 'Iniciar sesión' },
    ],
  },
];

function setRoutes() {
  return signedOutRoutesCore;
}

export const signedOutRoutes: Routes = setRoutes();
