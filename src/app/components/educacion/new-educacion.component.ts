import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Route, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreEdu:string='';
  tituloEdu:string='';
  fechaInicio:string='';
  fechaFin:string='';
  aprobadasEdu:string='';
  promedio:string='';
  imagen?:string='';
  
  constructor(private eduService:EducacionService, private router:Router,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  onCreate():void{
    var educacion = new Educacion();
    educacion.setNombreEdu(this.nombreEdu);
    educacion.setTituloEdu(this.tituloEdu);
    educacion.setFechaInicio(this.fechaInicio);
    educacion.setFechaFin(this.fechaFin);
    educacion.setAprobadasEdu(this.aprobadasEdu);
    educacion.setPromedio(this.promedio);
    educacion.setImagen(this.imagen);
    if(this.verificarCheck()){ //verifica si esta checkeado
      educacion.setFechaFin("Actualidad");
    }
    if(this.previsualizacion){//verifica si hay imagen cargado
      educacion.setImagen(this.previsualizacion);
    }
    this.eduService.save(educacion).subscribe(
      data=>{
      alert("Educacion creada");
      this.router.navigate(['']);
    },err =>{
      alert("Error en la creacion de la Educacion");
      console.log(educacion.nombreEdu, educacion.tituloEdu, educacion.fechaInicio , educacion.fechaFin, educacion.aprobadasEdu, educacion.promedio, educacion.imagen);
      console.log("y ahora las variables: "+this.nombreEdu,this.tituloEdu,this.fechaInicio,this.fechaFin,this.aprobadasEdu,this.promedio,this.imagen)
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
