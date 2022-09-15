import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/model/curso';
import { CursoService } from 'src/app/service/curso.service';

@Component({
  selector: 'app-new-curso',
  templateUrl: './new-curso.component.html',
  styleUrls: ['./new-curso.component.css']
})
export class NewCursoComponent implements OnInit {
  linkCurso:string='';
  tituloCurso:string='';
  nombreCurso:string='';

  constructor(private cursoService:CursoService,private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    var curso = new Curso(this.tituloCurso,this.nombreCurso,this.linkCurso);

    this.cursoService.save(curso).subscribe(
      data=>{
      alert("Curso creada");
      this.router.navigate(['']);
    },err =>{
      alert("Error en la creacion de el Curso");
      this.router.navigate(['create']);
    }
    );
  }

}
