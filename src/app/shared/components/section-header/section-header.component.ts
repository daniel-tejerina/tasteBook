import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: false,
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.css'
})
export class SectionHeaderComponent {
  @Input() title: string = "";
  @Input() showActionButton: boolean = false;
  @Input() actionLabel: string = "Nuevo";
  @Input() actionUrl: string = "#";
}
