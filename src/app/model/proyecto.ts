export class Proyecto {
    id:number;
    nombreProj:string;
    descripcionProj:string;
    fechaInicioProj:string;
    fechaFinProj:string;
    imgProj:string = '';
    linkProj:string ='';

    constructor(nombre:string, descripcion:string, fechaInicio:string,fechaFin:string,img?:string,link?:string){
        this.nombreProj=nombre;
        this.descripcionProj=descripcion;
        this.fechaInicioProj=fechaInicio;
        this.fechaFinProj=fechaFin;
        this.imgProj=img;
        this.linkProj=link;
    }
    public setNombreProj(variable:string){
        this.nombreProj = variable;
    }
    public setDescripcionProj(variable:string){
        this.descripcionProj = variable;
    }
    public setFechaInicioProj(variable:string){
        this.fechaInicioProj = variable;
    }
    public setFechaFinProj(variable:string){
        this.fechaFinProj = variable;
    }
    public setImgProj(variable:string){
        this.imgProj = variable;
    }
    public setLinkProj(variable:string){
        this.linkProj = variable;
    }
}
