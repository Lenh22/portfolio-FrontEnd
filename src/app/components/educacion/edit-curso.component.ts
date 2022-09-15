import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/model/curso';
import { CursoService } from 'src/app/service/curso.service';

@Component({
  selector: 'app-edit-curso',
  templateUrl: './edit-curso.component.html',
  styleUrls: ['./edit-curso.component.css']
})
export class EditCursoComponent implements OnInit {
  curso:Curso = null;
  constructor(private cursoService:CursoService,
              private activateRouter:ActivatedRoute,
              private router:Router          
    ) { }

    ngOnInit(): void {
      const id = this.activateRouter.snapshot.params['id'];
      this.cursoService.details(id).subscribe(
        data =>{
          this.curso = data;
        },err =>{
          alert("Error al encontrar el curso");
          this.router.navigate(['']);
        }
      )
    }
  
    onUpdate(): void {
      const id = this.activateRouter.snapshot.params['id'];
      this.cursoService.update(id,this.curso).subscribe(data =>{
        this.router.navigate(['']);
      },err =>{
        alert("No se pudo editar el Curso");
        this.router.navigate(['update']);
      })
    }

}
