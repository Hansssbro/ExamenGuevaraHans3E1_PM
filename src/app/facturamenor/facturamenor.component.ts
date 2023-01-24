import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facturamenor',
  templateUrl: './facturamenor.component.html',
  styleUrls: ['./facturamenor.component.css']
})
export class FacturamenorComponent implements OnInit {

  constructor(private router:Router) { }

  nombre:any
  apellido:any
  correo:any
  num:any
  edad:any

    ngOnInit(): void {
    this.recuperar()
    localStorage.clear()
  }
  fma(){
    this.router.navigate(['f']);
  }

  recuperar(){
    this.nombre=localStorage.getItem('nombre')
    this.apellido=localStorage.getItem('apellido')
    this.edad=localStorage.getItem('edad')
    this.correo=localStorage.getItem('correo')
    this.num=localStorage.getItem('numero')
  }
}
