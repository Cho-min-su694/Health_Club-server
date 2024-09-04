import { Test, TestingModule } from '@nestjs/testing';
import { BodyPartsService } from './body-parts.service';

describe('BodyPartsService', () => {
  let service: BodyPartsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BodyPartsService],
    }).compile();

    service = module.get<BodyPartsService>(BodyPartsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
