import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FacturaMDComponent } from './factura-md/factura-md.component';
import { FacturamenorComponent } from './facturamenor/facturamenor.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    FacturaMDComponent,
    FacturamenorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
