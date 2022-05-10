import { Tareas } from './../Models/Tareas';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  listaTarea: Tareas[] = [];
  recibeTarea: String = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea() {

    console.log(this.recibeTarea);
    const guardarNuevaTarea : Tareas = {

      nombreTarea: this.recibeTarea,
      estadoTarea: false
    };

    this.listaTarea.push(guardarNuevaTarea)
    this.recibeTarea = '';

  }

  eliminarTarea(index:number) {
    console
    this.listaTarea.splice(index,1);
    
  }
}
