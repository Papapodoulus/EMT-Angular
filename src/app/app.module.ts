import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IncidentsComponent } from './components/incidents/incidents.component';
import { SearchBusComponent } from './components/search-bus/search-bus.component';
import { StopComponent } from './components/stop/stop.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { AgmCoreModule } from '@agm/core';
import { StopNameComponent } from './components/stop-name/stop-name.component';
import { StopNameMapComponent } from './components/stop-name-map/stop-name-map.component';
import { StopCoordinatesComponent } from './components/stop-coordinates/stop-coordinates.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IncidentsComponent,
    SearchBusComponent,
    StopComponent,
    NavBarComponent,
    StopNameComponent,
    StopNameMapComponent,
    StopCoordinatesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAnPO2BqqbFc5I2lqL2e6DagzHRs0MIGRY'
    }),
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

