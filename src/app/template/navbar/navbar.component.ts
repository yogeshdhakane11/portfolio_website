import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/icon/icon.component';
import { Footer_name } from '../../../dynamic_variable/app_info';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  links = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];
  open = false;
  scrolled = false;
  footerName = Footer_name;

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 60;
  }

  toggleMenu(): void {
    this.open = !this.open;
  }

  goTo(section: string): void {
    this.open = false;
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  }
}
