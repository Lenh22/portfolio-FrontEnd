import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaServiceService } from 'src/app/service/experiencia-service.service';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent implements OnInit {
  expEdit: Experiencia = null;

  constructor(private expService: ExperienciaServiceService,private activatedRoute: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.expService.detail(id).subscribe(
      data=>{
        this.expEdit = data;
      },err =>{
        alert("Error al traer el modificador experienicia");
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.expService.update(id,this.expEdit).subscribe(
      data=> {
        this.router.navigate(['']);
      },err => {
        alert("Error al modificar experienicia");
      }
    )
  }

}
