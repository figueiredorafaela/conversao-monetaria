/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConversaoService } from './conversao.service';

describe('Service: Conversao', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConversaoService]
    });
  });

  it('should ...', inject([ConversaoService], (service: ConversaoService) => {
    expect(service).toBeTruthy();
  }));
});
