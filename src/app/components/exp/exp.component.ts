import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaServiceService } from 'src/app/service/experiencia-service.service';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {

  expList:any;
  homeworkList:any;

  experienciaBack:Experiencia[]=[];

  constructor(private datosPorfolio:PortfolioService, private expService: ExperienciaServiceService, private tokenService: TokenService) {}

  isLogged =false;


  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      this.expList=data.exp;
      this.homeworkList=data.exp.jobHomework;
    })
    
    this.cargarExp();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarExp():void{
    this.expService.lista().subscribe(data => {this.experienciaBack = data},
      err =>{
        alert("No se pudo cargar Experiencias");
      });
  }

  delete(id?:number){
    if(id!= undefined){
      this.expService.delete(id).subscribe(data => {
        this.cargarExp();
      },err => {
        alert("No se pudo borrar la Experiencia");
      }
      )
    }
  }
}
