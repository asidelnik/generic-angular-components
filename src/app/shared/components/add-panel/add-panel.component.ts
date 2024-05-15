import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { IFormField } from '../../../interfaces/IGenericTableAndForm';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { IDataUnion } from '../../../interfaces/union';

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
  constructor(
    public dialogRef: MatDialogRef<AddPanelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.formFields.forEach((field) => {
      this.form.addControl(field.name, new FormControl(''));
    });
  }

  onSubmit() {
    this.dialogRef.close(this.form.value);
  }
}
