import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FotoModule }    from './foto/foto.module';
import { PainelModule } from './painel/painel.module';


import { HttpModule } from '@angular/http'
import 'rxjs/add/operator/map';

@NgModule({
  imports:      [ BrowserModule, FotoModule, HttpModule, PainelModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }