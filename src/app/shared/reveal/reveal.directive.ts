import { AfterViewInit, Directive, ElementRef, HostBinding, Input, OnDestroy } from '@angular/core';

/**
 * Structural-ish attribute directive that fades/slides an element in
 * once it scrolls into the viewport. Usage:
 * <div pfReveal [delay]="100" from="left">...</div>
 */
@Directive({
  selector: '[pfReveal]',
  standalone: true
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input() delay = 0;
  @Input() from: 'bottom' | 'left' | 'right' = 'bottom';
  @Input() threshold = 0.1;

  @HostBinding('class.pf-reveal') baseClass = true;
  @HostBinding('class.pf-reveal--left') get isLeft() { return this.from === 'left'; }
  @HostBinding('class.pf-reveal--right') get isRight() { return this.from === 'right'; }

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const node = this.el.nativeElement;
    node.style.transitionDelay = `${this.delay}ms`;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('pf-in');
          this.observer?.disconnect();
        }
      },
      { threshold: this.threshold }
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
