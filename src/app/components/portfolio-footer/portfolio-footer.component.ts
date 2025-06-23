import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portfolio-footer',
  templateUrl: './portfolio-footer.component.html',
  styles: [`
    :host {
      display: contents;
    }
  `],
  standalone: true,
  imports: [CommonModule, FontAwesomeModule]
})
export class PortfolioFooterComponent {
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;
  faGithub = faGithub;
}
