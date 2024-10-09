import { Test, TestingModule } from '@nestjs/testing';
import { GymmembershipsController } from './gymmemberships.controller';
import { GymmembershipsService } from './gymmemberships.service';

describe('GymmembershipsController', () => {
  let controller: GymmembershipsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GymmembershipsController],
      providers: [GymmembershipsService],
    }).compile();

    controller = module.get<GymmembershipsController>(GymmembershipsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
