import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { fromEvent, debounceTime } from "rxjs";
import { MoedaService } from "./services/moeda.service";
import { ConversaoService } from "./services/conversao.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {


  constructor(private moedaService: MoedaService,private service: ConversaoService) { }

  converter($event: any){
    this.service.adicionar($event);
  }

  ngOnInit() {
  }

}
