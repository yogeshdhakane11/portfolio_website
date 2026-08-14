import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/icon/icon.component';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

interface ContactSocial {
  icon: string;
  label: string;
  sub: string;
  url: string;
  color: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, IconComponent, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  socials: ContactSocial[] = [
    { icon: 'linkedin', label: 'LinkedIn', sub: 'yogesh-dhakane', url: 'https://www.linkedin.com/in/yogesh-dhakane-640a0122a', color: '#0ea5e9' },
    { icon: 'github', label: 'GitHub', sub: 'yogeshdhakane11', url: 'https://github.com/yogeshdhakane11/', color: '#8b5cf6' },
    { icon: 'external-link', label: 'HackerRank', sub: 'yogeshdhakane', url: 'https://www.hackerrank.com/profile/yogeshdhakane', color: '#10b981' },
    { icon: 'shield', label: 'Certification', sub: 'Java Full Stack', url: '#', color: '#f59e0b' }
  ];
}
