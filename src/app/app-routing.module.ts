import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditAboutComponent } from "./components/about/edit-about.component";
import { EditCursoComponent } from "./components/educacion/edit-curso.component";
import { EditEducacionComponent } from "./components/educacion/edit-educacion.component";
import { EditIdiomaComponent } from "./components/educacion/edit-idioma.component";
import { EditProyectoComponent } from "./components/proyecto/edit-proyecto.component";
import { EditExpComponent } from "./components/exp/edit-exp.component";
import { EditSkillComponent } from "./components/skill/edit-skill.component";
import { NewSkillComponent } from "./components/skill/new-skill.component";
import { NewCursoComponent } from "./components/educacion/new-curso.component";
import { NewEducacionComponent } from "./components/educacion/new-educacion.component";
import { NewProyectoComponent } from "./components/proyecto/new-proyecto.component";
import { NewIdiomaComponent } from "./components/educacion/new-idioma.component";
import { NewExpComponent } from "./components/exp/new-exp.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { NuevoUsuarioComponent } from "./components/login/nuevo-usuario.component";

const routes : Routes = [
    //home
    {path:'',component:HomeComponent},
    //Login
    {path:'login',component:LoginComponent},//cuando se pone la barra
    {path: 'nuevo-usuario',component:NuevoUsuarioComponent},
    //Experiencia
    {path: 'nuevaexp', component:NewExpComponent},
    {path: 'editexp/:id',component:EditExpComponent},
    //Educacion
    {path: 'nuevaedu',component:NewEducacionComponent},
    {path: 'editedu/:id',component:EditEducacionComponent},
    //Sobre Mi
    {path: 'editabout/:id',component:EditAboutComponent},
    //Curso
    {path: 'nuevocurso',component:NewCursoComponent},
    {path: 'editcurso/:id',component:EditCursoComponent},
    //Idioma
    {path: 'nuevoidioma',component:NewIdiomaComponent},
    {path: 'editidioma/:id',component:EditIdiomaComponent},
    //Poryecto
    {path: 'nuevoproy',component:NewProyectoComponent},
    {path: 'editproy/:id',component:EditProyectoComponent},
    //Skill
    {path: 'nuevaskill',component:NewSkillComponent},
    {path: 'editskill/:id',component:EditSkillComponent},


];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}