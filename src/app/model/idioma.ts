export class Idioma {
    id:number;
    nombreIdi:string;
    nivelIdi:string;

    constructor(nombreIdi:string, nivelIdi:string){
        this.nivelIdi=nombreIdi;
        this.nivelIdi=nivelIdi;
    }
    public setNombreId(variable:string){
        this.nombreIdi = variable;
    }
    public setNivelIdi(variable:string){
        this.nivelIdi = variable;
    }
}
