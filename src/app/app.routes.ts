import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { EditComponent } from './pages/edit/edit.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SavedInterfacesComponent } from './pages/saved-interfaces/saved-interfaces.component';
import { TemplatesComponent } from './pages/templates/templates.component';

export const routes: Routes = [

   {
      path: '',
      component: HomeComponent
   },
   {
      path: 'about',
      component: AboutComponent
   },
   {
      path: 'contact-us',
      component: ContactUsComponent
   },
   {
      path: 'edit',
      component: EditComponent
   },
   {
      path: 'login',
      component: LoginComponent
   },
   {
      path: 'settings',
      component: SettingsComponent
   },
   {
      path: 'saved-interfaces',
      component: SavedInterfacesComponent
   },
   {
      path: 'templates',
      component: TemplatesComponent
   },
   {
      path: ':id',
      component: HomeComponent
   },
   { path: '', redirectTo: '', pathMatch: 'full' },
   { path: '**', redirectTo: '', pathMatch: 'full' }
];
