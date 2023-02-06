import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmacao-delete.dialog',
  templateUrl: './confirmacao-delete-dialog.component.html',
  styleUrls: ['./confirmacao-delete-dialog.component.css']
})
export class ConfirmacaoDeleteDialogComponent {

  constructor(public dialog: MatDialogRef<ConfirmacaoDeleteDialogComponent>) {}

  cancelar() {
    this.dialog.close();
  }

  }
