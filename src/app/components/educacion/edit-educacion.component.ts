import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
           private router: Router,
           private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.eduService.details(id).subscribe(
      data =>{
        if(data.fechaFin == 'Actualidad'){ //verificar el check
          (<HTMLInputElement>document.getElementById("actualidad")).checked = true;
        }
        this.educacion = data;
      },err =>{
        alert("Error al encontrar la educacion");
        this.router.navigate(['']);
      }
    ) 
  }

  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
    if(this.verificarCheck()){ //verifica si esta checkeado
      this.educacion.fechaFin='Actualidad';
      console.log("esta verificado el actualidad check")
    }
    if(this.previsualizacion){//verifica si hay imagen cargado
      this.subirArchivo();
    }
    this.eduService.update(id,this.educacion).subscribe(data =>{
      this.router.navigate(['']);
    },err =>{
      alert("No se pudo editar la educacion");
      this.router.navigate(['update']);
    })
  }
//para el Check
  checkeoActual(){
    var check = this.verificarCheck();
    if(check== true){
      (<HTMLInputElement>document.getElementById("actualidad")).setAttribute('value','false');
    }else{
      (<HTMLInputElement>document.getElementById("actualidad")).setAttribute('value','true');
    }
    console.log("Actualidad: "+check);
  }

  verificarCheck(){
    var check = (<HTMLInputElement>document.getElementById("actualidad")).checked;
    return check
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
      this.educacion.imagen = this.previsualizacion;
    } catch(e){
      alert("No se pudo subir la imagen");
    }
  }
}
