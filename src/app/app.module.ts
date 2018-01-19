import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavbarComponent } from './navbar/navbar.component';
import { navbarHorizontalComponent } from './navbarHorizontal/navbarHorizontal.component';
import { CariListeComponent } from './cari-liste/cari-liste.component';
import { StokComponent } from './stok/stok.component';
import { ServisComponent } from './servis/servis.component';
import { LoginComponent } from './login/login.component';
import { DetaillistComponent } from './detaillist/detaillist.component';
import { CariDetayComponent } from './detaillist/cari-detay/cari-detay.component';
import { CariHareketComponent } from './detaillist/cari-hareket/cari-hareket.component';
import { StokHareketComponent } from './detaillist/stok-hareket/stok-hareket.component';
import { ServisTipiComponent } from './servis-tipi/servis-tipi.component';
import { ServisListesiComponent } from './servis/servis-listesi/servis-listesi.component';
import { PersonelComponent } from './personel/personel.component';
import { TeklifComponent } from './teklif/teklif.component';
import { OlusturComponent } from './teklif/olustur/olustur.component';
import {teklifRouting} from "./teklif/teklif.routing";
import { LisansComponent } from './detaillist/lisans/lisans.component';
import { KritikStokComponent } from './stok/kritik-stok/kritik-stok.component';
import { TahsilatComponent } from './tahsilat/tahsilat.component';
import { TediyeComponent } from './tediye/tediye.component';
import { CrmNavigationComponent } from './detaillist/crm-navigation/crm-navigation.component';
import { GorevListesiComponent } from './gorev-listesi/gorev-listesi.component';
import { ServisDetayComponent } from './detaillist/servis-detay/servis-detay.component';
import { ServislisteComponent } from './servisliste/servisliste.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    navbarHorizontalComponent,
    CariListeComponent,
    StokComponent,
    ServisComponent,
    LoginComponent,
    DetaillistComponent,
    CariDetayComponent,
    CariHareketComponent,
    StokHareketComponent,
    ServisTipiComponent,
    ServisListesiComponent,
    PersonelComponent,
    TeklifComponent,
    OlusturComponent,
    LisansComponent,
    KritikStokComponent,
    TahsilatComponent,
    TediyeComponent,
    CrmNavigationComponent,
    GorevListesiComponent,
    ServisDetayComponent,
    ServislisteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    teklifRouting,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'Cari', component: CariListeComponent },
      { path: 'Stok', component: StokComponent },
      { path: 'Servis', component: ServisComponent },
      { path: 'Login', component: LoginComponent },
      { path: 'Servistipi', component: ServisTipiComponent },
      { path: 'Servislistesi', component: ServisListesiComponent },
      { path: 'Personel', component: PersonelComponent },
      { path: 'Teklif', component: TeklifComponent },
      { path: 'Kritikstok', component: KritikStokComponent },
      { path: 'Tahsilat', component: TahsilatComponent },
      { path: 'Tediye', component: TediyeComponent },
      { path: 'Gorevlistesi', component: GorevListesiComponent },
      { path: 'Servisl', component: ServislisteComponent }
    ], {
      useHash: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
