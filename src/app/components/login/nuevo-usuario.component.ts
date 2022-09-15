import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {
  nombre:string='';
  nombreUsuario:string='';
  email:string='';
  password:string='';
  authorities:string []=[];

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    var usuario = new NuevoUsuario(this.nombre,this.nombreUsuario,this.email,this.password);

    this.authService.nuevo(usuario).subscribe(
      data=>{
      alert("Usuario creado");
      this.router.navigate(['login']);
    },err =>{
      alert("Error en la creacion del usuario");
      this.router.navigate(['nuevo']);
    }
    );
  }

}
