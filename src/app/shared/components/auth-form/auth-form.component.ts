import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  standalone: false,
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.css'
})
export class AuthFormComponent {
  @Input() authForm!: FormGroup;
  @Input() title: string = "";
  @Input() buttonLabel: string = "Enviar";
  @Input() errorMessage: string = ""

  @Output() submitted = new EventEmitter<void>();

  onSubmit(): void {
    this.submitted.emit();
  }

}
