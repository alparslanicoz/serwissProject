import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CariListeComponent } from "./cari-liste/cari-liste.component";

const appRoutes: Routes = [
    { path: '', component: AppComponent },
    { path: 'Cariliste', component: CariListeComponent }
  ];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes, { enableTracing: true });
