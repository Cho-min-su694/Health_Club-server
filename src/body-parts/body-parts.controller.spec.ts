import { Test, TestingModule } from '@nestjs/testing';
import { BodyPartsController } from './body-parts.controller';
import { BodyPartsService } from './body-parts.service';

describe('BodyPartsController', () => {
  let controller: BodyPartsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BodyPartsController],
      providers: [BodyPartsService],
    }).compile();

    controller = module.get<BodyPartsController>(BodyPartsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
