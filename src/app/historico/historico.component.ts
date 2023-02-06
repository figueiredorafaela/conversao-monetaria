import { MoedaService } from './../services/moeda.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { IConversao } from '../interfaces/IConversao';
import { MatPaginator } from '@angular/material/paginator';
import { ConfirmaDeleteDialogComponent } from '../confirma-delete-dialog/confirma-delete-dialog.component';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  @ViewChild(MatSort) matSort: MatSort;
  @ViewChild(MatPaginator) matPaginator: MatPaginator;

  constructor(private service: MoedaService, public dialog: MatDialog) { }

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

  deletar(conversao: IConversao) {
    const dialogRef = this.dialog.open(ConfirmaDeleteDialogComponent, {width: '400px', height: '120px',})

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.dataSource.data.indexOf(conversao);

        localStorage.setItem('conversao', JSON.stringify(this.dataSource.data));
        this.dataSource.data = JSON.parse(localStorage.getItem('conversao')!) || [];
      }
    });
  }

}
