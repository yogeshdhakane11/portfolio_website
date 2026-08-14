import { AfterViewInit, Component, ElementRef, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/icon/icon.component';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

interface SkillCategory {
  icon: string;
  title: string;
  color: string;
  items: string[];
}

interface ProficiencyBar {
  label: string;
  pct: number;
  color: string;
}

interface LanguageSkill {
  lang: string;
  lvl: string;
  color: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, IconComponent, RevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('barRow') barRows?: QueryList<ElementRef<HTMLElement>>;

  categories: SkillCategory[] = [
    { icon: 'smartphone', title: 'Mobile Development', color: '#06b6d4', items: ['Flutter', 'Dart', 'Android', 'iOS', 'Material UI', 'Responsive UI', 'Dark Mode'] },
    { icon: 'database', title: 'Backend Development', color: '#8b5cf6', items: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'Python', 'Django'] },
    { icon: 'globe', title: 'Web Technologies', color: '#10b981', items: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'RxJS'] },
    { icon: 'cloud', title: 'Cloud — AWS', color: '#f59e0b', items: ['EC2', 'S3', 'Lambda', 'RDS', 'IAM'] },
    { icon: 'database', title: 'Databases', color: '#f43f5e', items: ['PostgreSQL', 'MySQL'] },
    { icon: 'wrench', title: 'Tools & DevOps', color: '#38bdf8', items: ['Git', 'GitLab CI/CD', 'Android Studio', 'Xcode', 'Postman', 'Agile'] }
  ];

  bars: ProficiencyBar[] = [
    { label: 'Flutter / Dart', pct: 82, color: '#06b6d4' },
    { label: 'Java / Spring Boot', pct: 80, color: '#8b5cf6' },
    { label: 'Angular / TypeScript', pct: 75, color: '#10b981' },
    { label: 'Python / Django', pct: 65, color: '#f59e0b' },
    { label: 'PostgreSQL / MySQL', pct: 72, color: '#f43f5e' },
    { label: 'AWS Cloud', pct: 60, color: '#38bdf8' }
  ];
  barsOn: boolean[] = this.bars.map(() => false);

  languages: LanguageSkill[] = [
    { lang: 'Java', lvl: 'Advanced', color: '#f59e0b' },
    { lang: 'Dart', lvl: 'Advanced', color: '#06b6d4' },
    { lang: 'TypeScript', lvl: 'Intermediate', color: '#38bdf8' },
    { lang: 'Python', lvl: 'Basic', color: '#10b981' }
  ];

  private observers: IntersectionObserver[] = [];

  ngAfterViewInit(): void {
    this.barRows?.forEach((row, i) => {
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          this.barsOn[i] = true;
          obs.disconnect();
        }
      }, { threshold: 0.05 });
      obs.observe(row.nativeElement);
      this.observers.push(obs);
    });
  }

  ngOnDestroy(): void {
    this.observers.forEach((o) => o.disconnect());
  }
}
