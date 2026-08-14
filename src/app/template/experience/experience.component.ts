import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/icon/icon.component';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

interface WorkExperience {
  role: string;
  type: string;
  current: boolean;
  company: string;
  loc: string;
  period: string;
  color: string;
  bullets: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, IconComponent, RevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: WorkExperience[] = [
    {
      role: 'Software Developer',
      type: 'Full-time',
      current: true,
      company: 'Mudraangle Technologies LLP',
      loc: 'Pune, India',
      period: 'June 2026 – Present',
      color: '#6366f1',
      bullets: [
        'Built cross-platform mobile apps using Flutter for Android & iOS',
        'Deployed and published apps to Google Play Store and Apple App Store',
        'Developed backend APIs with Java Spring Boot for scalable microservices',
        'Proficient in Git & GitLab CI/CD for version control and integration',
        'Delivered high-quality solutions under Agile methodologies'
      ]
    },
    {
      role: 'Software Developer',
      type: 'Internship',
      current: false,
      company: 'Mudraangle Technologies LLP',
      loc: 'Pune, India',
      period: 'December 2025 – June 2026',
      color: '#ec4899',
      bullets: [
        'Developed responsive Flutter solutions for Android and iOS',
        'Worked on SaaS product features end-to-end across mobile & web',
        'Collaborated with cross-functional teams to ship quality features'
      ]
    }
  ];
}
