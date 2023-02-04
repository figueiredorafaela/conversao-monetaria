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

  getSymbols(){
    this.moedaService.getSymbols().subscribe((x) => {
      var object = Object.keys(x.symbols).map(function (moeda) {
        let resul = x.symbols[moeda];
        return resul;
      });
      this.listaMoedas = object;
      this.matTable = new MatTableDataSource(this.listaMoedas);
      this.matTable.paginator = this.matPaginator;
      this.matTable.sort = this.matSort;
    });
  }


  ngOnInit() {
    this.moedaService.getSymbols().subscribe((x) => {
      this.matTable.data = Object.values(x.symbols);
    });
    this.matTable.paginator = this.matPaginator;
    this.matTable.sort = this.matSort;
  }

}
