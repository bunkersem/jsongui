import { TestBed, inject } from '@angular/core/testing';
import { UserConfigService } from './userconfig.service';

describe('UserconfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserConfigService]
    });
  });

  it('should be created', inject([UserConfigService], (service: UserConfigService) => {
    expect(service).toBeTruthy();
  }));
});
