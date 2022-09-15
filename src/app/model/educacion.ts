export class Educacion {
    id:number;
    nombreEdu:string;
    tituloEdu:string;
    fechaInicio:string;
    fechaFin:string;
    aprobadasEdu:string;
    promedio:string;
    imagen:string='';

    constructor (){

    }

    public setNombreEdu(variable:string):void {
        this.nombreEdu = variable;
    }
    public setTituloEdu(variable:string):void {
        this.tituloEdu = variable;
    }
    public setFechaInicio(variable:string):void {
        this.fechaInicio = variable;
    }
    public setFechaFin(variable:string):void {
        this.fechaFin = variable;
    }
    public setAprobadasEdu(variable:string):void {
        this.aprobadasEdu = variable;
    }
    public setPromedio(variable:string):void {
        this.promedio = variable;
    }
    public setImagen(variable:string):void {
        this.imagen = variable;
    }

}
