import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skill:Skill=null;
  constructor(
    private skillService:SkillService,
    private activateRouter:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.skillService.details(id).subscribe(
      data =>{
        this.skill = data;
      },err =>{
        alert("Error al encontrar la habilidad");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.skillService.update(id,this.skill).subscribe(data =>{
      this.router.navigate(['']);
    },err =>{
      alert("No se pudo editar la habilidad");
      this.router.navigate(['update']);
    })
  }
}
