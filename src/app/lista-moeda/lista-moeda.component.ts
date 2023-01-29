import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, debounceTime } from 'rxjs';
import { MoedaService } from '../services/moeda.service';

@Component({
  selector: 'app-lista-moeda',
  templateUrl: './lista-moeda.component.html',
  styleUrls: ['./lista-moeda.component.css']
})
export class ListaMoedaComponent implements OnInit {

  moedas: Array<{ id: string, nome: string}> = [];
  filtro: string = '';

  constructor(private moedaService: MoedaService) { }

  key: string = 'nome'; // Define um valor padrão, para quando inicializar o componente
  reverse: boolean = false;

  ngOnInit() {
    this.moedaService.listar().subscribe(
      retornoApi => this.moedas = retornoApi
  )}

  @ViewChild('campoBusca')
  campoBusca!: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
    fromEvent(this.campoBusca.nativeElement, 'keyup')
      .pipe(
        debounceTime(20)
      )
      .subscribe((e: Event) => {


        const target = e.target as HTMLInputElement;
        this.filtro = target.value;
      });
  }

  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
}

}
