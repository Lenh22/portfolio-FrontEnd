import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skillList:any;

  skillBack:Skill[]=[];
  isLogged=false;

  constructor(private datosPorfolio:PortfolioService,private skillService:SkillService,private tokenService:TokenService) { }
  
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      this.skillList=data.skill;
    });
    this.cargarBack();
    this.verificarToken();
  }

  cargarBack():void{
    this.skillService.lista().subscribe(
      data=>{
        this.skillBack = data;
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
      this.skillService.delete(id).subscribe(data => {
        this.cargarBack();
      },err => {
        alert("No se pudo borrar la habilidad");
      }
      )
    }
  }
}
