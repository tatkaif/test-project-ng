import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AppService } from './services/app.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';
import { CurrencyRateComponent } from './components/currency-rate/currency-rate.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { ChangeNamePipe } from './pipes/change-name.pipe';
import { AboutGuard } from './guards/about.guard';
import { LoginComponent } from './components/login/login.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent, canActivate: [AboutGuard] },
  { path: 'currency-rate', component: CurrencyRateComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    CurrencyRateComponent,
    CurrencyPipe,
    ChangeNamePipe,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatTableModule,
    MatInputModule,
    MatMenuModule
  ],
  providers: [
    AppService,
    AboutGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
