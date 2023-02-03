import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IMoedas } from '../interfaces/IMoedas';
import { ISimbolos } from '../interfaces/ISimbolos';
import { MoedaService } from '../services/moeda.service';

@Component({
  selector: 'app-lista-moeda',
  templateUrl: './lista-moeda.component.html',
  styleUrls: ['./lista-moeda.component.css']
})
export class ListaMoedaComponent implements OnInit {


  @ViewChild('MatSort')
  matSort!: MatSort;
  @ViewChild('MatPaginator')
  matPaginator!: MatPaginator;

  mostraMoeda: string[] = ['description', 'code'];
  matTable!: MatTableDataSource<IMoedas>;

  listaMoedas: IMoedas[] = [];

  constructor(private moedaService: MoedaService) { }

  getSimbolos() {
    this.moedaService.getSymbols().subscribe((simbol: ISimbolos) => {
      const result = Object.keys(simbol.symbols).map(function (a) {

        return simbol.symbols[a];
      });

      this.matTable.paginator = this.matPaginator;
      this.matTable.sort = this.matSort
      this.matTable = new MatTableDataSource(this.listaMoedas);
      this.listaMoedas = result;

    })
  }

  ngOnInit() {
    this.getSimbolos();
  }

}
