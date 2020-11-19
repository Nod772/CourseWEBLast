/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DiscussionsService } from './discussions.service';

describe('Service: Discussions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiscussionsService]
    });
  });

  it('should ...', inject([DiscussionsService], (service: DiscussionsService) => {
    expect(service).toBeTruthy();
  }));
});
