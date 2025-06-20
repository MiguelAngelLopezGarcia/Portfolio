import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
  @Input() buttonText: string = '';
  @Input() previewText: string = '';
  @Input() technologies: string[] = [];
  @Input() backgroundButton: string = '';
  @Input() link: string = '';
  @Input() videoLink: string = '';

  safeVideoUrl: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['videoLink'] && this.videoLink) {
      this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoLink);
    }
  }
}
