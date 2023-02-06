import { MoedaService } from './../services/moeda.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { IConversao } from '../interfaces/IConversao';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  @ViewChild(MatSort) matSort: MatSort;
  @ViewChild(MatPaginator) matPaginator: MatPaginator;

  dialog: MatDialog;

  constructor(private service: MoedaService, dialog: MatDialog) {
    this.dialog = dialog;
  }

  dataSource = new MatTableDataSource<IConversao>();

  ngOnInit() {
    this.dataSource.data = JSON.parse(localStorage.getItem('conversao')!) || [];
    this.dataSource.sort = this.matSort;
  }

  mostraMoeda: string[] = [
    'valorEntrada',
    'moedaOriginal',
    'moedaDestino',
    'valorSaida',
    'data',
    'taxa',
    'deleta'
  ]

  delete(conversao: IConversao) {
    const dialogRef = this.dialog.open(confirmacaoDeleteDialog, {width: '250px',})

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog');
      if (result) {
        const index = this.dataSource.data.indexOf(conversao);

        localStorage.setItem('conversao', JSON.stringify(this.dataSource.data));
        this.dataSource.data = JSON.parse(localStorage.getItem('conversao')!) || [];
      }
    });
  }

}

export class confirmacaoDeleteDialog {
  constructor(public dialogRef: MatDialogRef<confirmacaoDeleteDialog>) {}
}
