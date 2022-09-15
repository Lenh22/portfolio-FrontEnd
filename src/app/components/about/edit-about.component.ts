import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutMe } from 'src/app/model/about-me';
import { AboutMeService } from 'src/app/service/about-me.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {
  about: AboutMe =null;
  constructor(private aboutService:AboutMeService, private activateRouter:ActivatedRoute,
     private router:Router) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.aboutService.details(id).subscribe(
      data =>{
        this.about = data;
      },err =>{
        alert("Error al encontrar la educacion");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.aboutService.update(id,this.about).subscribe(data =>{
      this.router.navigate(['']);
    },err =>{
      alert("No se pudo editar la informacion personal");
      this.router.navigate(['update']);
    })
  }
}
