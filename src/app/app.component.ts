import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { fromEvent, debounceTime } from "rxjs";
import { MoedaService } from "./services/moeda.service";
import { ConversaoService } from "./services/conversao.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, AfterViewInit {

  distritos: Array<{ id: number, nome: string }> = [];
  filtro: string = '';
  constructor(private moedaService: MoedaService,private service: ConversaoService) { }


  converter($event: any){
    this.service.adicionar($event);
  }


  @ViewChild('campoBusca')
  campoBusca!: ElementRef<HTMLInputElement>;


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
