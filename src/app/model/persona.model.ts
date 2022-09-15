export class persona{
    id?:number;
    nombre:string;
    apelido:string;
    img:string;

    constructor(nombre:string, apelido:string, img:string) {   
        this.nombre = nombre;
        this.apelido = apelido;
        this.img = img;

    } 

}