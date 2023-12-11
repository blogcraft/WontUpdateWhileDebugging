import { Component } from '@angular/core';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-page-not-found',
  template: `
    <p>
      <fa-icon matListIcon [icon]="faExclamationTriangle" />
      Información.
    </p>
    <p>No se encontró esta página.</p>
  `,
  styleUrls: ['./page-not-found.component.css'],
  standalone: true,
  imports: [FontAwesomeModule],
})
export class PageNotFoundComponent {
  faExclamationTriangle = faExclamationTriangle;
  constructor() {}
}
