import { Component, Inject, Input, OnInit } from '@angular/core';
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
export class AddPanelComponent implements OnInit {
  addItemForm: FormGroup = new FormGroup({});
  constructor(
    public dialogRef: MatDialogRef<AddPanelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IFormField[]
  ) {}

  ngOnInit() {
    this.data.forEach((field: IFormField) => {
      this.addItemForm.addControl(field.name, new FormControl(''));
    });
  }

  onSubmit() {
    this.dialogRef.close(this.addItemForm.value);
  }
}
