import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  projectList:any;

  proyectoBack:Proyecto[]=[];
  isLogged=false;

  constructor(
    private datosPorfolio:PortfolioService,
    private proyectoService:ProyectoService,
    private tokenService:TokenService
    ) { }
  
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      this.projectList=data.project;
    })
    this.cargarBack();
    this.verificarToken();
  }

  cargarBack():void{
    this.proyectoService.lista().subscribe(
      data=>{
        this.proyectoBack = data;
        });
  }

  verificarToken():void{
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged=false;
    }
  }

  delete(id?:number){
    if(id!= undefined){
      this.proyectoService.delete(id).subscribe(data => {
        this.cargarBack();
      },err => {
        alert("No se pudo borrar el proyecto");
      }
      )
    }
  }
}
