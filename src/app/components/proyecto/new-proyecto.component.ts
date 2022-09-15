import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreProj:string;
  descripcionProj:string;
  fechaInicioProj:string;
  fechaFinProj:string;
  imgProj:string = '';

  constructor(
              private proyectoService:ProyectoService,
              private router:Router
  ) { }

  ngOnInit(): void {
  }

  onCreate():void{
    var proyecto = new Proyecto(this.nombreProj,this.descripcionProj,this.fechaInicioProj,this.fechaFinProj,this.imgProj);
    this.proyectoService.save(proyecto).subscribe(
      data=>{
      alert("Proyecto creado");
      this.router.navigate(['']);
    },err =>{
      alert("Error en la creacion del proyecto");
      this.router.navigate(['create']);
    }
    );
  }

}
