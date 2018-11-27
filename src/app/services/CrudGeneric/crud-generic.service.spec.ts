import { TestBed } from '@angular/core/testing';

import { CrudGenericService } from './crud-generic.service';

describe('CrudGenericService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudGenericService = TestBed.get(CrudGenericService);
    expect(service).toBeTruthy();
  });
});
