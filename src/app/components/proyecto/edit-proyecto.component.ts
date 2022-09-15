import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyecto:Proyecto=null;
  constructor(
              private proyectoService:ProyectoService,
              private activateRouter:ActivatedRoute,
              private router:Router
  ) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.proyectoService.details(id).subscribe(
      data =>{
        this.proyecto = data;
      },err =>{
        alert("Error al encontrar el proyecto");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.proyectoService.update(id,this.proyecto).subscribe(data =>{
      this.router.navigate(['']);
    },err =>{
      alert("No se pudo editar el proyecto");
      this.router.navigate(['update']);
    })
  }
}
