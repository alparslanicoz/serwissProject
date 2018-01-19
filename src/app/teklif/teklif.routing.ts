import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TeklifComponent } from "./teklif.component";
import { OlusturComponent } from "./olustur/olustur.component";

const teklifRoutes: Routes = [
  {
  path: 'Teklif',
  children: [
      {
        path: '',
        component: TeklifComponent
      },
      {
        path: 'Olustur',
        component: OlusturComponent
      }
    ]
  }
];

export const teklifRouting: ModuleWithProviders = RouterModule.forChild(teklifRoutes);
