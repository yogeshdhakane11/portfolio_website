import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/icon/icon.component';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

interface Stat {
  target: number;
  suffix: string;
  label: string;
  color: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, IconComponent, RevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('statsRow') statsRow?: ElementRef<HTMLElement>;

  roles = ['Full Stack Developer', 'Flutter Mobile Developer', 'Java Backend Developer', 'Angular Web Developer', 'Python Django Developer'];
  typedText = '';
  private roleIndex = 0;
  private deleting = false;
  private typeTimer?: ReturnType<typeof setTimeout>;

  stats: Stat[] = [
    { target: 1.8, suffix: '+', label: 'Years Exp.', color: 'var(--pf-cyan)' },
    { target: 10, suffix: '+', label: 'Projects', color: 'var(--pf-indigo)' },
    { target: 5, suffix: '+', label: 'Tech Stack', color: 'var(--pf-pink)' },
    { target: 2, suffix: '', label: 'Live Apps', color: 'var(--pf-emerald)' }
  ];
  counts: number[] = this.stats.map(() => 0);
  private countsAnimated = false;
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    this.runTypewriter();
  }

  ngAfterViewInit(): void {
    if (!this.statsRow) return;
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !this.countsAnimated) {
        this.countsAnimated = true;
        this.animateCounts();
        this.observer?.disconnect();
      }
    }, { threshold: 0.2 });
    this.observer.observe(this.statsRow.nativeElement);
  }

  ngOnDestroy(): void {
    clearTimeout(this.typeTimer);
    this.observer?.disconnect();
  }

  private runTypewriter(): void {
    const target = this.roles[this.roleIndex];
    let delay = 65;

    if (!this.deleting && this.typedText.length < target.length) {
      this.typedText = target.slice(0, this.typedText.length + 1);
    } else if (!this.deleting && this.typedText.length === target.length) {
      delay = 2000;
      this.deleting = true;
    } else if (this.deleting && this.typedText.length > 0) {
      this.typedText = this.typedText.slice(0, -1);
      delay = 35;
    } else {
      this.deleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
    }

    this.typeTimer = setTimeout(() => this.runTypewriter(), delay);
  }

  private animateCounts(): void {
    this.stats.forEach((stat, i) => {
      const to = Math.round(stat.target * 10);
      const step = () => {
        this.counts[i] = Math.min(this.counts[i] + Math.ceil(to / 40), to);
        if (this.counts[i] < to) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    });
  }

  displayValue(i: number): string {
    const raw = this.counts[i] / 10;
    return Number.isInteger(raw) ? String(raw) : raw.toFixed(1);
  }
}
