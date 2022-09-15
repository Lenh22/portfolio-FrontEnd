import { Component, OnInit } from '@angular/core';
import { AboutMe } from 'src/app/model/about-me';
import { persona } from 'src/app/model/persona.model';
import { AboutMeService } from 'src/app/service/about-me.service';
import { PersonaService } from 'src/app/service/persona.service';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  persona: persona = new persona("","","");
  miPorfolio:any;

  aboutBack:AboutMe[]=[];
  isLogged = false;

  //Llamo desde service
  constructor(private datosPorfolio:PortfolioService, public personaService:PersonaService,private aboutService:AboutMeService,private tokenService:TokenService) { }

  ngOnInit(): void {
    //json
    this.datosPorfolio.obtenerDatos().subscribe(data =>{this.miPorfolio=data;});
    this.personaService.getPersona().subscribe(data => {this.persona = data});
    //backend
    this.cargarBack();
    this.verificarToken();
  }

  cargarBack():void{
    this.aboutService.lista().subscribe(
      data=>{
        this.aboutBack = data;
        });
  }

  verificarToken():void{
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged=false;
    }
  }

}
