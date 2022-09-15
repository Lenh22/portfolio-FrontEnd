import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educacion: Educacion = null;
  constructor(
           private eduService:EducacionService,
           private activateRouter:ActivatedRoute,
          private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.eduService.details(id).subscribe(
      data =>{
        this.educacion = data;
      },err =>{
        alert("Error al encontrar la educacion");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.eduService.update(id,this.educacion).subscribe(data =>{
      this.router.navigate(['']);
    },err =>{
      alert("No se pudo editar la educacion");
      this.router.navigate(['']);
    })
  }
}
