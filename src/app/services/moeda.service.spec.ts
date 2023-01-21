/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MoedaService } from './moeda.service';

describe('Service: Moeda', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoedaService]
    });
  });

  it('should ...', inject([MoedaService], (service: MoedaService) => {
    expect(service).toBeTruthy();
  }));
});
