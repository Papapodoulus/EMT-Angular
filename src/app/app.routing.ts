// Importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { SearchBusComponent } from './components/search-bus/search-bus.component';
import { HomeComponent } from './components/home/home.component';
import { StopComponent } from './components/stop/stop.component';
import { IncidentsComponent } from './components/incidents/incidents.component';
import { StopNameComponent } from './components/stop-name/stop-name.component';
import { StopCoordinatesComponent } from './components/stop-coordinates/stop-coordinates.component';


// Array de rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'stop', component: StopComponent },
    { path: 'stop-name', component: StopNameComponent },
    { path: 'stop-coordinates', component: StopCoordinatesComponent },
    { path: 'search-bus/:lat/:lng', component: SearchBusComponent },
    { path: 'incidents/:line', component: IncidentsComponent },
    { path: '**', component: HomeComponent }
];

// Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
