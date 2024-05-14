import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFormField } from '../../../interfaces/IGenericTableAndForm';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-panel',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-panel.component.html',
  styleUrl: './add-panel.component.scss',
})
export class AddPanelComponent {
  @Input() formFields: IFormField[] = [];
  form: FormGroup = new FormGroup({});
  @Output() closePanel: EventEmitter<void> = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {
    this.formFields.forEach((field) => {
      this.form.addControl(field.name, new FormControl(''));
    });
  }

  onSubmit() {
    this.closePanel.emit();
  }
}
