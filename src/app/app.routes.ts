import { Routes } from '@angular/router';
import { Login } from './features/auth/pages/login/login';
import { SignUp } from './features/auth/pages/sign-up/sign-up';
import { Home } from './features/home/home';
import { Ease } from './features/ease/ease';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: Ease },
  { path: 'home', component: Home },
  { path: 'login', component: Login },
  { path: 'sign-up', component: SignUp },
];