import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styles: [`
    :host {
      display: contents;
    }
  `],
  standalone: true,
  imports: [CommonModule]
})
export class ProjectCardComponent implements OnChanges {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() technologies: string[] = [];
  @Input() backgroundButton: string = '';
  @Input() link: string = '';
  @Input() videoLink: string = '';

  safeVideoUrl: SafeResourceUrl = '';
  safeText: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['videoLink'] && this.videoLink) {
      this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoLink);
    }
    if (changes['description'] && this.description) {
      this.safeText = this.sanitizer.bypassSecurityTrustHtml(
        this.description.replace(/\n/g, '<br>')
      );
    }
  }
}
