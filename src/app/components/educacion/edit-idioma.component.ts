import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Idioma } from 'src/app/model/idioma';
import { IdiomaService } from 'src/app/service/idioma.service';

@Component({
  selector: 'app-edit-idioma',
  templateUrl: './edit-idioma.component.html',
  styleUrls: ['./edit-idioma.component.css']
})
export class EditIdiomaComponent implements OnInit {
  idioma:Idioma=null;
  constructor(private idiomaService:IdiomaService,
              private activateRouter:ActivatedRoute,
              private router:Router) { }

 ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.idiomaService.details(id).subscribe(
      data =>{
        this.idioma = data;
      },err =>{
        alert("Error al encontrar el idioma");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.idiomaService.update(id,this.idioma).subscribe(data =>{
      this.router.navigate(['']);
    },err =>{
      alert("No se pudo editar el idioma");
      this.router.navigate(['update']);
    })
  }

}
