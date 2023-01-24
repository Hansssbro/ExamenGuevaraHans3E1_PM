import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor( private router: Router) { 
  }
  nombre:any
  apellido:any
  correo:any
  num:any
  edad:any

  ngOnInit(): void {
    this.almacenar()
    localStorage.clear()
  }
  fma(){
    this.router.navigate(['f']);
  }

  almacenar(){
    localStorage.setItem('nombre',this.nombre)
    localStorage.setItem('apellido',this.apellido)
    localStorage.setItem('contra',this.edad)
    localStorage.setItem('correo',this.correo)
    localStorage.setItem('numero',this.num)
  }


}
