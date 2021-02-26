import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-poste-form',
  templateUrl: './poste-form.component.html',
  styleUrls: ['./poste-form.component.scss']
})
export class PosteFormComponent implements OnInit {
  @Output() guarde = new EventEmitter;

  posteo = {
    fecha: '',
    mensaje: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar() {

    if(this.posteo.fecha == ''){
      alert("No ingresaste la fecha");
    }

    if (this.posteo.mensaje == ''){
      alert("No ingresaste un mensage");
    }

    this.guarde.emit();
  }

}
