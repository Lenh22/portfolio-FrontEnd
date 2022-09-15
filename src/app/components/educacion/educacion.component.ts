import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/model/curso';
import { Educacion } from 'src/app/model/educacion';
import { Idioma } from 'src/app/model/idioma';
import { CursoService } from 'src/app/service/curso.service';
import { EducacionService } from 'src/app/service/educacion.service';
import { IdiomaService } from 'src/app/service/idioma.service';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacionBack:Educacion[]=[];
  cursoBack:Curso[]=[];
  idiomaBack:Idioma[]=[];

  isLogged = false;
  
  educationList:any;
  courseList:any;
  idiomList:any;

  constructor(
     private datosPorfolio:PortfolioService,
     private eduService:EducacionService,
     private cursoService:CursoService,
     private idiomaService:IdiomaService,
     private tokenService:TokenService) { }

  ngOnInit(): void {
    this.cargarEduJSON();

    this.cargarEducacion();
    this.cargarCurso();
    this.cargarIdioma();
    this.verificarToken();

  }

  cargarEducacion():void{
    this.eduService.lista().subscribe(
      data=>{
        this.educacionBack = data;
        });
  }
  cargarCurso():void{
    this.cursoService.lista().subscribe(
      data=>{
        this.cursoBack = data;
        });
  }
  cargarIdioma():void{
    this.idiomaService.lista().subscribe(
      data=>{
        this.idiomaBack = data;
        });
  }

  verificarToken():void{
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged=false;
    }
  }

  deleteEdu(id?:number){
    if(id!=undefined){
      this.eduService.delete(id).subscribe(
        data =>{
          this.cargarEducacion();
        },err => {
          alert("No se pudo eliminar la educacion");
        }
      );
    }
  }

  deleteCurso(id?:number){
    if(id!=undefined){
      this.cursoService.delete(id).subscribe(
        data =>{
          this.cargarEducacion();
        },err => {
          alert("No se pudo eliminar el curso");
        }
      );
    }
  }
  deleteIdioma(id?:number){
    if(id!=undefined){
      this.idiomaService.delete(id).subscribe(
        data =>{
          this.cargarEducacion();
        },err => {
          alert("No se pudo eliminar el idioma");
        }
      );
    }
  }

  cargarEduJSON():void{
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      this.educationList=data.education;
      this.courseList=data.course;
      this.idiomList=data.idiom;
    })
  }
}
