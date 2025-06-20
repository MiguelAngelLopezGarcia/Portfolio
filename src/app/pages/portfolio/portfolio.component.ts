import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioFooterComponent } from '../../components/portfolio-footer/portfolio-footer.component';
import { PortfolioHeaderComponent } from '../../components/portfolio-header/portfolio-header.component';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
interface Project {
  title: string;
  description: string;
  buttonText: string;
  previewText: string;
  technologies: string[];
  backgroundButton: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styles: [`
    :host {
      display: contents;
    }
  `],
  standalone: true,
  imports: [CommonModule, PortfolioHeaderComponent, ProjectCardComponent, PortfolioFooterComponent]
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution built with cutting-edge technology, featuring seamless user experience and robust backend architecture.',
      buttonText: 'Visit Website',
      previewText: 'E-Commerce Preview',
      technologies: ['React', 'Node.js', 'MongoDB'],
      backgroundButton: 'bg-gradient-to-r from-[#a855f7] to-[#6366f1] hover:opacity-90'
    },
    {
      title: 'Mobile App Dashboard',
      description: 'An intuitive mobile application dashboard with real-time analytics, beautiful data visualizations, and seamless user interactions.',
      buttonText: 'Visit Website',
      previewText: 'Mobile Dashboard Preview',
      technologies: ['Flutter', 'Firebase', 'Chart.js'],
      backgroundButton: 'bg-gradient-to-r from-[#ec4795] to-[#f43f5e] hover:opacity-90'
    },
    {
      title: 'AI-Powered SaaS',
      description: 'A sophisticated SaaS platform leveraging artificial intelligence to provide automated solutions and intelligent insights for businesses.',
      buttonText: 'Visit Website',
      previewText: 'AI SaaS Preview',
      technologies: ['Python', 'TensorFlow', 'AWS'],
      backgroundButton: 'bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] hover:opacity-90'
    }
  ];
}
