import { Component, OnInit } from '@angular/core';
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
  
  constructor(private eduService:EducacionService, private router:Router) { }

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

}
