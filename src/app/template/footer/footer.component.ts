import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/icon/icon.component';
import { Footer_name, VERSION } from '../../../dynamic_variable/app_info';

interface FooterSocial {
  href: string;
  icon: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  footerName = Footer_name;
  version = VERSION;
  year = new Date().getFullYear();

  socials: FooterSocial[] = [
    { href: 'https://github.com/yogeshdhakane11/', icon: 'github' },
    { href: 'https://www.linkedin.com/in/yogesh-dhakane-640a0122a', icon: 'linkedin' },
    { href: 'mailto:yogeshdhakane001@gmail.com', icon: 'mail' }
  ];
}
