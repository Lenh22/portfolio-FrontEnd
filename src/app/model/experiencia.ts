export class Experiencia {
    id:number;
    nombreExp:string;
    descripcionExp:string;
    subNombreExp:string;
    fechaInicio:string;
    fechaFin:string;

    constructor(nombreExp:string, descripcionExp:string, subNombreExp:string, fechaInicio:string, fechaFin:string){
        this.nombreExp = nombreExp;
        this.descripcionExp = descripcionExp;
        this.subNombreExp = subNombreExp;
        this.fechaInicio = fechaInicio; 
        this.fechaFin = fechaFin;
    }

    public setNombreExp(nombreExp:string){
        this.nombreExp = nombreExp;
    }
    public setSubNombreExp(subNombreExp:string){
        this.subNombreExp = subNombreExp;
    }
    public setDescripcionExp(descripcionExp:string){
        this.descripcionExp = descripcionExp;
    }
    public setFechaInicio(fechaInicio:string){
        this.fechaInicio = fechaInicio;
    }
    public setFechaFin(fechaFin:string){
        this.fechaFin = fechaFin;
    }

}
