import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirma-delete-dialog',
  templateUrl: './confirma-delete-dialog.component.html',
  styleUrls: ['./confirma-delete-dialog.component.css']
})
export class ConfirmaDeleteDialogComponent{

  constructor(public dialogRef: MatDialogRef<ConfirmaDeleteDialogComponent>) {}

  cancelar(): void {
    this.dialogRef.close();
  }

}
