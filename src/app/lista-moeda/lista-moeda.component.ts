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
  dataSource: MatTableDataSource<IMoedas>;
  moedas: IMoedas[] = [];

  constructor(private moedaService: MoedaService) { }

  getSymbols(){
    this.moedaService.getSymbols().subscribe((x) => {
      var object = Object.keys(x.symbols).map(function (moeda) {
        let resul = x.symbols[moeda];
        return resul;
      });
      this.moedas = object;
      console.log("lista moedas")
      console.table(this.moedas)
      this.dataSource = new MatTableDataSource(this.moedas);
      this.dataSource.paginator = this.matPaginator;
      this.dataSource.sort = this.matSort;
    });
  }


  ngOnInit() {
    this.moedaService.getSymbols().subscribe((x) => {
      this.dataSource.data = Object.values(x.symbols);
    });
    this.dataSource.paginator = this.matPaginator;
    this.dataSource.sort = this.matSort;
  }

}
