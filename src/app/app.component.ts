import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { fromEvent, debounceTime } from "rxjs";
import { MoedaService } from "./services/moeda.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, AfterViewInit {

  conversoes: any[] = [];

  distritos: Array<{ id: number, nome: string }> = [];
  filtro: string = '';

  converter($event: any){
    const conversao = {...$event, data: new Date()}
    this.conversoes.push(conversao);
  }



  @ViewChild('campoBusca')
  campoBusca!: ElementRef<HTMLInputElement>;

  constructor(private moedaService: MoedaService) { }

  ngOnInit() {
    this.moedaService.listar().subscribe(
      retornoApi => this.distritos = retornoApi
    )
  }

  ngAfterViewInit() {
    fromEvent(this.campoBusca.nativeElement, 'keyup')
      .pipe(
        // Deixei um intervalo bem alto (2s)
        // para ficar bem claro na animação.
        debounceTime(20)
      )
      .subscribe((e: Event) => {
        const target = e.target as HTMLInputElement;
        this.filtro = target.value;
      });
  }
}
