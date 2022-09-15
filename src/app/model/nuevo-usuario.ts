export class NuevoUsuario {
    nombre!:string;
    nombreUsuario!:string;
    email!:string;
    password!:string;
    authorities!:string [];

    constructor(nombre:string, nombreUsuario:string,email:string, password:string, auth?:string[]){
        this.nombre=nombre;
        this.nombreUsuario=nombreUsuario;
        this.email=email;
        this.password= password;
        this.authorities = auth;
    }

    public setNombre(variable:string){
        this.nombre = variable;
    }
    public setNombreUsuario(variable:string){
        this.nombreUsuario = variable;
    }
    public setEmail(variable:string){
        this.email = variable;
    }
    public setPassword(variable:string){
        this.password = variable;
    }
    public setAuthorities(variable:string[]){
        this.authorities = variable;
    }
}
