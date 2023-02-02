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
export class ListaMoedaComponent {



}
