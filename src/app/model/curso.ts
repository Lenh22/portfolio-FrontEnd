export class Curso {
    id:number;
    linkCurso:string;
    tituloCurso:string;
    nombreCurso:string;

    constructor(tituloCurso:string, nombreCurso:string, linkCurso?:string){
        this.nombreCurso=nombreCurso;
        this.tituloCurso=tituloCurso;
        this.linkCurso = linkCurso;
    }
    public setNombreCurso(variable:string){
        this.nombreCurso = variable;
    }
    public setTituloCurso(variable:string){
        this.tituloCurso = variable;
    }
    public LinkCurso(variable:string){
        this.linkCurso = variable;
    }
}
