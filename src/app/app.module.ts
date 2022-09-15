import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { ExpComponent } from './components/exp/exp.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillComponent } from './components/skill/skill.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';


//Inicio Servicio
import { PortfolioService } from './service/portfolio.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { interceptorProvider } from './service/interceptor-service';
import { NewExpComponent } from './components/exp/new-exp.component';
import { EditExpComponent } from './components/exp/edit-exp.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { EditAboutComponent } from './components/about/edit-about.component';
import { EditIdiomaComponent } from './components/educacion/edit-idioma.component';
import { EditCursoComponent } from './components/educacion/edit-curso.component';
import { NewCursoComponent } from './components/educacion/new-curso.component';
import { NewIdiomaComponent } from './components/educacion/new-idioma.component';
import { NewSkillComponent } from './components/skill/new-skill.component';
import { EditSkillComponent } from './components/skill/edit-skill.component';
import { EditProyectoComponent } from './components/proyecto/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyecto/new-proyecto.component';
import { NuevoUsuarioComponent } from './components/login/nuevo-usuario.component';
//Fin servicio

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    HeaderComponent,
    ExpComponent,
    EducacionComponent,
    SkillComponent,
    ProyectoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExpComponent,
    EditExpComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    EditAboutComponent,
    EditIdiomaComponent,
    EditCursoComponent,
    NewCursoComponent,
    NewIdiomaComponent,
    NewSkillComponent,
    EditSkillComponent,
    EditProyectoComponent,
    NewProyectoComponent,
    NuevoUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    PortfolioService,
    interceptorProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
