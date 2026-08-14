import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/icon/icon.component';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

interface EducationEntry {
  degree: string;
  inst: string;
  univ: string;
  loc: string;
  period: string;
  icon: string;
  color: string;
  grad: boolean;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, IconComponent, RevealDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education: EducationEntry[] = [
    {
      degree: 'Master of Computer Applications (MCA)',
      inst: 'ZIBACAR, Pune',
      univ: 'Savitribai Phule Pune University',
      loc: 'Pune, Maharashtra',
      period: 'June 2023 – April 2025',
      icon: '🎓',
      color: '#6366f1',
      grad: true
    },
    {
      degree: 'Bachelor of Computer Science (BCS)',
      inst: 'NAC&SC Shevgaon',
      univ: 'Savitribai Phule Pune University',
      loc: 'Ahmednagar, Maharashtra',
      period: 'June 2020 – April 2023',
      icon: '📚',
      color: '#8b5cf6',
      grad: false
    }
  ];
}
