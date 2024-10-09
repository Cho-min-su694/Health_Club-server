import { Test, TestingModule } from '@nestjs/testing';
import { GymmembershipsService } from './gymmemberships.service';

describe('GymmembershipsService', () => {
  let service: GymmembershipsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GymmembershipsService],
    }).compile();

    service = module.get<GymmembershipsService>(GymmembershipsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
