import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Idioma } from 'src/app/model/idioma';
import { IdiomaService } from 'src/app/service/idioma.service';

@Component({
  selector: 'app-new-idioma',
  templateUrl: './new-idioma.component.html',
  styleUrls: ['./new-idioma.component.css']
})
export class NewIdiomaComponent implements OnInit {
  nombreIdi:string='';
  nivelIdi:string='';
  constructor(private idiomaService:IdiomaService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    var idioma = new Idioma(this.nombreIdi,this.nivelIdi);
    idioma.setNombreId(this.nombreIdi);
    idioma.setNivelIdi(this.nivelIdi);
    this.idiomaService.save(idioma).subscribe(
      data=>{
      alert("Idioma creado");
      this.router.navigate(['']);
    },err =>{
      alert("Error en la creacion de el idioma");
      this.router.navigate(['create']);
    }
    );
  }

}
