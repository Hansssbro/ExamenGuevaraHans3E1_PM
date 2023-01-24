import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { FacturaMDComponent } from './factura-md/factura-md.component';
import { FacturamenorComponent } from './facturamenor/facturamenor.component';
import { FormularioComponent } from './formulario/formulario.component';




const routes: Routes = [
  {
    path:'',component:FormularioComponent
  },
  {
    path:'f',component:FacturamenorComponent
  },
  {
    path:'F',component:FacturaMDComponent
  }
];



//fme{
//  this.router.navigate(['¨f'])
//};

//fma{
 // this.router.navigate(['¨f'])
//}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
