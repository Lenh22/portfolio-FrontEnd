import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
    private router:Router,
    private sanitizer: DomSanitizer
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
    if(this.previsualizacion){//verifica si hay imagen cargado
      this.subirArchivo();
    }
    this.skillService.update(id,this.skill).subscribe(data =>{
      this.router.navigate(['']);
    },err =>{
      alert("No se pudo editar la habilidad");
      this.router.navigate(['update']);
    })
  }

//Para archivos 
public previsualizacion:string;

capturarFile(event:any){
  const archivoCapturado = event.target.files[0];
  this.extraerBase64(archivoCapturado).then((image:any) =>{
    this.previsualizacion=image.base;
    console.log(image);
  });
  console.log(archivoCapturado);
}
  extraerBase64 = async ($event:any) => new Promise((resolve,reject)=>{
    try{
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event); 
      reader.onload = () => {
        resolve({
          blob:$event,
          image,
          base:reader.result
        });
      };
      reader.onerror = error =>{
        resolve({
          blob:$event,
          image,
          base:null
        });
      };

    }catch(e){
      return null;
    }
  })

  subirArchivo():any{
    try{
      this.skill.imgHab = this.previsualizacion;
    } catch(e){
      alert("No se pudo subir la imagen");
    }
  }
}
