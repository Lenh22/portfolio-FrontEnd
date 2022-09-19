import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaServiceService } from 'src/app/service/experiencia-service.service';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent implements OnInit {
  expEdit: Experiencia = null;

  constructor(private expService: ExperienciaServiceService,private activatedRoute: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.expService.detail(id).subscribe(
      data=>{
        if(data.fechaFin == 'Actualidad'){ //verificar el check
          (<HTMLInputElement>document.getElementById("actualidad")).checked = true;
        }
        this.expEdit = data;
      },err =>{
        alert("Error al traer el modificador experienicia");
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if(this.verificarCheck()){ //verifica si esta checkeado
      this.expEdit.fechaFin='Actualidad';
      console.log("esta verificado el actualidad check")
    }
    this.expService.update(id,this.expEdit).subscribe(
      data=> {
        this.router.navigate(['']);
      },err => {
        alert("Error al modificar experienicia");
      }
    )
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

}
