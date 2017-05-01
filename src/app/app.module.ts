import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { DbFieldNumberComponent } from './components/dbfieldnumber/dbfieldnumber.component';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    HomeComponent,
    CounterComponent,
    DbFieldNumberComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'dbfieldnumber', component: DbFieldNumberComponent },
            { path: '**', redirectTo: 'home' }
        ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
