import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarvellousComponent } from './marvellous-ngfor/marvellous.component';
import { MarvellousNgifComponent } from './marvellous-ngif/marvellous-ngif.component';
import { MarvellousNgswtichComponent } from './marvellous-ngswtich/marvellous-ngswtich.component';

@NgModule({
  declarations: [
    AppComponent,
    MarvellousComponent,
    MarvellousNgifComponent,
    MarvellousNgswtichComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
