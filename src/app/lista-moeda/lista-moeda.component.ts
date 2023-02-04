import { Conversao } from '../interfaces/IConversao';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IMoedas } from '../interfaces/IMoedas';
import { MoedaService } from '../services/moeda.service';

@Component({
  selector: 'app-lista-moeda',
  templateUrl: './lista-moeda.component.html',
  styleUrls: ['./lista-moeda.component.css']
})
export class ListaMoedaComponent implements OnInit {


  @ViewChild(MatPaginator, { static: true }) matPaginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) matSort!: MatSort;
  mostraMoeda: string[] = ['description', 'code'];

  matTable!: MatTableDataSource<IMoedas>;

  listaMoedas: IMoedas[] = [];

  constructor(private moedaService: MoedaService) { }


  ngOnInit() {
    this.moedaService.getSymbols().subscribe((x) => {
      this.matTable.data = Object.values(x.symbols);
    });
    this.matTable.paginator = this.matPaginator;
    this.matTable.sort = this.matSort;
  }

}
