import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombreHab:string; 
  nivelHab:string;
  imgHab:string;
  
  constructor(private skillService:SkillService,private router:Router) { }

  ngOnInit(): void {
  }
  onCreate():void{
    var skill = new Skill(this.nombreHab,this.nivelHab,this.imgHab);
    this.skillService.save(skill).subscribe(
      data=>{
      alert("Habilidad creada");
      this.router.navigate(['']);
    },err =>{
      alert("Error en la creacion de la habilidad");
      this.router.navigate(['create']);
    }
    );
  }


}
