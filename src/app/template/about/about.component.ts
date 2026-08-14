import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/icon/icon.component';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

interface Capability {
  icon: string;
  title: string;
  sub: string;
  color: string;
}

interface SocialLink {
  label: string;
  href: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, IconComponent, RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  capabilities: Capability[] = [
    { icon: 'smartphone', title: 'Mobile Dev', sub: 'Flutter · iOS · Android', color: '#06b6d4' },
    { icon: 'globe', title: 'Web Dev', sub: 'Angular · TS · HTML', color: '#ec4899' },
    { icon: 'database', title: 'Backend', sub: 'Java · Spring · REST', color: '#8b5cf6' },
    { icon: 'cloud', title: 'Cloud / AWS', sub: 'EC2 · S3 · Lambda · RDS', color: '#f59e0b' }
  ];

  socials: SocialLink[] = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yogesh-dhakane-640a0122a', icon: 'linkedin', color: '#38bdf8' },
    { label: 'HackerRank', href: 'https://www.hackerrank.com/profile/yogeshdhakane', icon: 'external-link', color: '#10b981' },
    { label: 'GitHub', href: 'https://github.com/yogeshdhakane11/', icon: 'github', color: '#8b5cf6' }
  ];
}
