import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import 'polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WidgetComponent } from './components/widget/widget.component';
import { DataEntryComponent } from './components/data-entry/data-entry.component';
import { DataEntryEntityComponent } from './components/data-entry-entity/data-entry-entity.component';

import { AppRoutingModule } from './app-routing.module';
import { MaterialAngularModule } from './material/material-angular.module';

import { ElectronService } from './providers/electron.service';
import { JSONDataService } from './providers/jsondata.service';
import { UserConfigService } from './providers/userconfig/userconfig.service';

export class PizzaPartyAppModule { }
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WidgetComponent,
    DataEntryComponent,
    DataEntryEntityComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialAngularModule,
  ],
  providers: [ElectronService, JSONDataService, UserConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
