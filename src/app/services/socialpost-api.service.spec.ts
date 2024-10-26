import { TestBed } from '@angular/core/testing';

import { SocialpostAPIService } from './socialpost-api.service';

describe('SocialpostAPIService', () => {
  let service: SocialpostAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialpostAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
