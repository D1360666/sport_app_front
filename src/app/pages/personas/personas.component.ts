import { NgModule, Component, Input } from '@angular/core';
import { Persona } from '../interfaces/persona';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css',
  
})
export class PersonasComponent {
  @Input() nueva: Persona={
    cedula:0,
    nombre:'',
    apellido:'',
    fechaNac:'',
    direccion:'',
    telefono:'',
    tipo:0,
    activo:0
  }
  

  agregar(){
    //if(this.nueva.cedula===0){return;}
    console.log('cedula: ', this.nueva.cedula);
    console.log('nombre: ', this.nueva.nombre);
    console.log('apellido: ', this.nueva.apellido);
    console.log('fechaNac: ', this.nueva.fechaNac);
    console.log('direccion: ', this.nueva.direccion);
    console.log('telefono: ', this.nueva.telefono);
    console.log('tipo: ', this.nueva.tipo);
    console.log('activo: ', 1);


  }
  tipos = [
  {name: "Jugador", id:'1'},
  {name: "Responsable", id:'2'},
  {name: "Tecnico", id: '3'},
  {name: "Canchero", id: '4'},
  {name: "Delegado", id: '5'}
  ];
  searchType = {
    thisId: this.tipos[1].id
  };
}
