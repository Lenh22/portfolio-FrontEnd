import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombreHab:string=''; 
  nivelHab:string='';
  imgHab:string='';
  
  constructor(private skillService:SkillService,private router:Router,private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
  }
  onCreate():void{
    var skill = new Skill(this.nombreHab,this.nivelHab.toString(),this.imgHab);
    skill.setNombreHab(this.nombreHab);
    skill.setNivelHab(this.nivelHab.toString());
    skill.setImgHab(this.imgHab);
    if(this.previsualizacion){
      skill.setImgHab(this.previsualizacion);
    }
    this.skillService.save(skill).subscribe(
      data=>{
        console.log(skill.nombreHab);
        console.log(skill.nivelHab);
        console.log(skill.imgHab);
      alert("Habilidad creada");
      this.router.navigate(['']);
    },err =>{
      alert("Error en la creacion de la habilidad");
      this.router.navigate(['create']);
    }
    );
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


}
