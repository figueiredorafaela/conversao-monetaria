import { HttpClientTestingModule } from '@angular/common/http/testing'
/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { MoedaService } from './moeda.service';

describe('Service: Moeda', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoedaService],
      imports: [HttpClientTestingModule]
    });

  });

  it('should be created', inject([MoedaService], (service: MoedaService) => {
    expect(service).toBeTruthy();
  }));

});
