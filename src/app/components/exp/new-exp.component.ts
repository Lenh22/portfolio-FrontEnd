import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaServiceService } from 'src/app/service/experiencia-service.service';

@Component({
  selector: 'app-new-exp',
  templateUrl: './new-exp.component.html',
  styleUrls: ['./new-exp.component.css']
})
export class NewExpComponent implements OnInit {
  nombreExp:string ='';
  descripcionExp:string = '';
  subNombreExp:string ='';
  fechaInicio:string='';
  fechaFin:string='';

  constructor(private experienciaService: ExperienciaServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const exp = new Experiencia(this.nombreExp,this.descripcionExp,this.subNombreExp,this.fechaInicio,this.fechaFin); 
    if(this.verificarCheck()){ //verifica si esta checkeado
      exp.setFechaFin("Actualidad");
    }
    this.experienciaService.save(exp).subscribe(
    data=> {
    alert('Experiencia creada');
    this.router.navigate(['']);
  },err=>{
    alert('Fallo en la creacion');
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
}
