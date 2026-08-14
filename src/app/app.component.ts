import { Component } from '@angular/core';
import { AnimatedBgComponent } from './template/animated-bg/animated-bg.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { HeroComponent } from './template/hero/hero.component';
import { AboutComponent } from './template/about/about.component';
import { SkillsComponent } from './template/skills/skills.component';
import { ExperienceComponent } from './template/experience/experience.component';
import { ProjectsComponent } from './template/projects/projects.component';
import { EducationComponent } from './template/education/education.component';
import { ContactComponent } from './template/contact/contact.component';
import { FooterComponent } from './template/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AnimatedBgComponent,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
