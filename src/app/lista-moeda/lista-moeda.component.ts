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


  @ViewChild(MatPaginator) matPaginator: MatPaginator;
  @ViewChild(MatSort) matSort: MatSort;


  mostraMoeda = ['description', 'code'];
  dataSource: MatTableDataSource<IMoedas>;
  moedas: IMoedas[] = [];

  constructor(private moedaService: MoedaService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<IMoedas>
    this.moedaService.getSymbols().subscribe((x) => {
      this.dataSource.data = Object.values(x.symbols);
    });
    this.dataSource.paginator = this.matPaginator
    this.dataSource.sort = this.matSort;
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.matPaginator;
    this.dataSource.sort = this.matSort;
  }

  getSymbols(){
    this.moedaService.getSymbols().subscribe((x) => {
      var object = Object.keys(x.symbols).map(function (moeda) {
        let resul = x.symbols[moeda];
        return resul;
      });
      this.moedas = object;
      this.dataSource = new MatTableDataSource(this.moedas);
      this.dataSource.paginator = this.matPaginator;
      this.dataSource.sort = this.matSort;
    });
  }

  filtro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    };
  };



}
