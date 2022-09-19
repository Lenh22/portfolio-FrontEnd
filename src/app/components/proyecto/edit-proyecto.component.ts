import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyecto:Proyecto=null;
  constructor(
              private proyectoService:ProyectoService,
              private activateRouter:ActivatedRoute,
              private router:Router,
              private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.proyectoService.details(id).subscribe(
      data =>{
        if(data.fechaFinProj == 'Actualidad'){ //verificar el check
          (<HTMLInputElement>document.getElementById("actualidad")).checked = true;
        }
        this.proyecto = data;
      },err =>{
        alert("Error al encontrar el proyecto");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
    if(this.verificarCheck()){ //verifica si esta checkeado
      this.proyecto.fechaFinProj='Actualidad';
      console.log("esta verificado el actualidad check")
    }
    if(this.previsualizacion){//verifica si hay imagen cargado
      this.subirArchivo();
    }
    this.proyectoService.update(id,this.proyecto).subscribe(data =>{
      this.router.navigate(['']);
    },err =>{
      alert("No se pudo editar el proyecto");
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
      this.proyecto.imgProj = this.previsualizacion;
    } catch(e){
      alert("No se pudo subir la imagen");
    }
  }
}
