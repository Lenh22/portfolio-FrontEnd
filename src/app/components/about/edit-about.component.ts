import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  constructor(private aboutService:AboutMeService,
     private activateRouter:ActivatedRoute,
     private router:Router,
     private sanitizer: DomSanitizer
     ) { }

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
    if(this.previsualizacion){//verifica si hay imagen cargado
      this.subirArchivo();
    }
    this.aboutService.update(id,this.about).subscribe(data =>{
      this.router.navigate(['']);
    },err =>{
      alert("No se pudo editar la informacion personal");
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
    this.about.imagenMi = this.previsualizacion;
  } catch(e){
    alert("No se pudo subir la imagen");
  }
}
}
