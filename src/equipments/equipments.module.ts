import { Module } from '@nestjs/common';
import { EquipmentsService } from './equipments.service';
import { EquipmentsController } from './equipments.controller';
import { MulterModule } from '@nestjs/platform-express';
import { getStorage } from 'src/util/multer';

@Module({
  imports: [
    MulterModule.register({
      storage: getStorage('./media/equipment'),
    }),
  ],
  controllers: [EquipmentsController],
  providers: [EquipmentsService]
})
export class EquipmentsModule {}

