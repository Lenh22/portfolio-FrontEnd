export class AboutMe {
    id:number;
    imagenMi:string='';
    nombre:string;
    descripcion:string;


    constructor(nombre:string,descripcion:string, imagenMi?:string){
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.imagenMi=imagenMi;
    }

    public setNombre(variable:string){
        this.nombre = variable;
    }

    public setDescripcion(variable:string){
        this.descripcion = variable;
    }
    public setImagenMi(variable:string){
        this.imagenMi = variable;
    }

    
}
