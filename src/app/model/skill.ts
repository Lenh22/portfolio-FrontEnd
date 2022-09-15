export class Skill {
    id:number;
    nombreHab:string;
    nivelHab:string;
    imgHab:string ='';

    constructor(nombreHab:string,nivelHab:string,imgHab?:string) {
        this.nivelHab = nivelHab;
        this.nombreHab = nombreHab;
        this.imgHab = imgHab;
    }
    public setNombreHab(variable:string){
        this.nombreHab = variable;
    }
    public setNivelHab(variable:string){
        this.nivelHab = variable;
    }
    public getNivelHab():any{
        this.nivelHab;
    }
    public setImgHab(variable:string){
        this.imgHab  = variable;
    }
}
