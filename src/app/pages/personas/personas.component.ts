import { NgModule, Component, Input } from '@angular/core';
import { Persona } from '../interfaces/persona';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Select } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { DatePicker, DatePickerModule } from 'primeng/datepicker';
import { InputNumber } from 'primeng/inputnumber';


interface PersonType{
  code: string;
  name: string;
}

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [FormsModule, CommonModule, Select, InputNumber, DatePicker],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css',
  
})
export class PersonasComponent {

  personType: PersonType[] | undefined;

  selectedType: PersonType | undefined;
  date: Date | undefined;

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
  /*tipos = [
  {name: "Jugador", id:'1'},
  {name: "Responsable", id:'2'},
  {name: "Tecnico", id: '3'},
  {name: "Canchero", id: '4'},
  {name: "Delegado", id: '5'}
  ];
  searchType = {
    thisId: this.tipos[1].id
  };*/
  ngOnInit(){
    this.personType = [
      {name: "Jugador", code:'1'},
      {name: "Responsable", code:'2'},
      {name: "Tecnico", code:'3'},
      {name: "Canchero", code:'4'},
      {name: "Delegado", code:'5'},
    ];
  }
}
