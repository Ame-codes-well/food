import { NgModule } from '@angular/core';
import { CanActivateFn, Router, RouterModule, Routes } from '@angular/router';
import { inject } from '@angular/core';
import { Home } from './home/home';
import { About } from './about/about';
import { Services } from './services/services';
import { Contact } from './contact/contact';
import { Signup } from './signup/signup';
import { Login } from './login/login';
import { AuthService } from './auth.service';

const homeGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthenticated ? true : router.createUrlTree(['/login']);
};

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: Home, canActivate: [homeGuard] },
  { path: 'about', component: About },
  { path: 'services', component: Services },
  { path: 'contact', component: Contact },
  { path: 'signup', component: Signup },
  { path: 'login', component: Login },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
