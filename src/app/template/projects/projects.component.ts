import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/icon/icon.component';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

interface ProjectLink {
  label: string;
  url: string;
  primary: boolean;
}

interface OpenSourceProject {
  title: string;
  desc: string;
  tags: string[];
  repo: string;
  color: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, IconComponent, RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  fundspiTags = ['Flutter', 'Dart', 'Spring Boot', 'iOS', 'Android', 'Web', 'REST APIs'];

  fundspiLinks: ProjectLink[] = [
    { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.mf.fundspi&hl=en_IN', primary: true },
    { label: 'App Store', url: 'https://apps.apple.com/in/app/fundspi/id6474851217', primary: false },
    { label: 'fundspi.com', url: 'https://fundspi.com/', primary: false }
  ];

  openSourceProjects: OpenSourceProject[] = [
    { title: 'Chat App', desc: 'Real-time WebSocket chat with Spring Boot.', tags: ['Java', 'Spring Boot', 'WebSocket'], repo: 'Chat_App_Spring_Boot', color: '#06b6d4' },
    { title: 'Authorization System', desc: 'JWT-based auth & role-based access control.', tags: ['Java', 'JWT', 'Spring Security'], repo: 'Authorization_Spring_Boot', color: '#8b5cf6' },
    { title: 'E-Commerce Platform', desc: 'Full ecommerce backend with cart, orders & payments.', tags: ['Java', 'Spring Boot', 'MySQL'], repo: 'E_Commerce_Spring_Boot', color: '#ec4899' },
    { title: 'Banking Application', desc: 'Core banking — accounts, transfers, transactions.', tags: ['Java', 'Spring Boot', 'REST'], repo: 'Banking_Application_Spring_Boot', color: '#f59e0b' },
    { title: 'Flutter Shop App', desc: 'Cross-platform shopping app for iOS & Android.', tags: ['Flutter', 'Dart', 'Firebase'], repo: 'Flutter_Shop_App', color: '#10b981' },
    { title: 'Student Management', desc: 'Student records, CRUD and reporting system.', tags: ['Java', 'Spring Boot', 'REST'], repo: 'Student_Management_Spring_Boot', color: '#38bdf8' },
    { title: 'TodoList App', desc: 'Clean REST API todo list with Spring Boot.', tags: ['Java', 'Spring Boot', 'MySQL'], repo: 'TodoList_Spring_Boot', color: '#f43f5e' }
  ];

  githubBase = 'https://github.com/yogeshdhakane11/';
}
