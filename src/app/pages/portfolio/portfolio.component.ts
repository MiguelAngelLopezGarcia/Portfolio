import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioFooterComponent } from '../../components/portfolio-footer/portfolio-footer.component';
import { PortfolioHeaderComponent } from '../../components/portfolio-header/portfolio-header.component';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
interface Project {
  title: string;
  description: string;
  technologies: string[];
  backgroundButton: string;
  link: string;
  videoLink: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
  standalone: true,
  imports: [
    CommonModule,
    PortfolioHeaderComponent,
    ProjectCardComponent,
    PortfolioFooterComponent,
  ],
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      title: 'Mockvet',
      description:
        'Página web para la intranet de una clínica veterinaria, con funcionalidades de gestión de citas y administración de pacientes y mascotas. La contraseña para todos los usuarios es "123456" \n <strong>Administrador</strong>: super@usuario.com \n <strong>Trabajador</strong>: auxiliar@usuario.com',
      technologies: ['Angular', 'TypeScript', 'Tailwind', 'DaisyUi', 'Supabase', 'PostgreSQL'],
      backgroundButton:
        'bg-gradient-to-r from-[#a855f7] to-[#6366f1] hover:opacity-90',
      link: 'https://mockvet.netlify.app/',
      videoLink: 'https://www.youtube.com/embed/yOM3JVMddOU?si=_kwlU2GRNMbtCy31',
    },
    {
      title: 'B25ConvElectro',
      description:
        'Página web para que los alumnos del instituto suban documentos para que luego un administrador los valide. Incluye un sistema de autenticación y una base de datos para almacenar los documentos y sus estados de validación. La contraseña para todos los usuarios es "123456" \n <strong>Super Administrador</strong>: super@usuario.com \n <strong>Administrador</strong>: super@usuario.com \n <strong>Usuario</strong>: ejemplo@test.com',

      technologies: ['Angular', 'TypeScript', 'Tailwind', 'DaisyUi', 'Supabase', 'PostgreSQL'],
      backgroundButton:
        'bg-gradient-to-r from-[#ec4795] to-[#f43f5e] hover:opacity-90',
      link: 'https://conv-electro.netlify.app/',
      videoLink: 'https://www.youtube.com/embed/yOM3JVMddOU?si=_kwlU2GRNMbtCy31',
    },
    {
      title: 'Store Manager',
      description:
        'Concepto de tienda online. Incluye un sistema de autenticación, un modo oscuro, una base de datos para almacenar los productos y las imágenes de los mismos, una funcionalidad para descargar el stock de productos en diferentes formatos y un sistema que envía un correo en caso de stock bajo. La contraseña para todos los usuarios es "123456" \n <strong>Administrador</strong>: super@usuario.com \n <strong>Usuario</strong>: usuario@usuario.com',

      technologies: ['Angular', 'TypeScript', 'Tailwind', 'Flowbite', 'Supabase', 'PostgreSQL'],
      backgroundButton:
        'bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] hover:opacity-90',
      link: 'https://tech-computers.netlify.app/',
      videoLink: 'https://www.youtube.com/embed/yOM3JVMddOU?si=_kwlU2GRNMbtCy31',
    },
  ];
}
