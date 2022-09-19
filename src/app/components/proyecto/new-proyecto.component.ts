import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreProj:string;
  descripcionProj:string;
  fechaInicioProj:string;
  fechaFinProj:string;
  imgProj:string = '';
  linkProj:string = '';

  constructor(
              private proyectoService:ProyectoService,
              private router:Router,
              private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  }

  onCreate():void{
    var proyecto = new Proyecto(this.nombreProj,this.descripcionProj,this.fechaInicioProj,this.fechaFinProj,this.imgProj,this.linkProj);
    if(this.verificarCheck()){ //verifica si esta checkeado
      proyecto.setFechaFinProj("Actualidad");
    }
    if(this.previsualizacion){//verifica si hay imagen cargado
      proyecto.setImgProj(this.previsualizacion);
    }
    this.proyectoService.save(proyecto).subscribe(
      data=>{
      alert("Proyecto creado");
      this.router.navigate(['']);
    },err =>{
      alert("Error en la creacion del proyecto");
      this.router.navigate(['create']);
    }
    );
  }
//check
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
public previsualizacion:string; //Aqui se deja cargada la imagen

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
