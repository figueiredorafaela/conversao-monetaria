import { MoedaService } from './../services/moeda.service';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { ConverteMoedaComponent } from './converte-moeda.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe(ConverteMoedaComponent.name, () => {
  let component: ConverteMoedaComponent;
  let service: MoedaService;
  let fixture: ComponentFixture<ConverteMoedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConverteMoedaComponent],
      imports: [MatFormFieldModule, HttpClientTestingModule, MatSelectModule, MatIconModule, FormsModule, MatInputModule, BrowserAnimationsModule],
      providers: [MoedaService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConverteMoedaComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(MoedaService);
    spyOn(service, 'converterMoeda').and.returnValue(of({ 'info': 1, 'result': 1 }))
    spyOn(component, 'guardar').and.callThrough();
  })

  it(`#${ConverteMoedaComponent.prototype.converter.name} should call "converter" from service when submited and send to local storage`, () => {
    component.moedaOriginal = 'BRL';
    component.moedaDestino = 'USD';
    component.valorEntrada = 1;
    component.converter();
    fixture.detectChanges();
    fixture.debugElement.query(By.css('.btn-submit')).triggerEventHandler('click, null');
    expect(service.converterMoeda).toHaveBeenCalledWith('BRL', 'USD', 1);
    expect(component.guardar).toHaveBeenCalled();
    expect(component.valorSaida).toEqual(1);
  })


  it(`#${ConverteMoedaComponent.prototype.checar.name} should detect high conversion values`, () => {

  })


})
