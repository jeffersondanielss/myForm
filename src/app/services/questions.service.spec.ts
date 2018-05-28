import { TestBed, inject } from '@angular/core/testing';
import { QuestionsService } from './questions.service';
import { HttpClientModule } from '@angular/common/http';

describe('QuestionsService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [QuestionsService]
    });
  });

  it('should be created', inject([QuestionsService], (service: QuestionsService) => {
    expect(service).toBeTruthy();
  }));

});
