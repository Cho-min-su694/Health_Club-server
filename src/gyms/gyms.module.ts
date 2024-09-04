import { Module } from '@nestjs/common';
import { GymsService } from './gyms.service';
import { GymsController } from './gyms.controller';
import { MulterModule } from '@nestjs/platform-express';
import { getStorage } from 'src/util/multer';

@Module({
  imports: [
    MulterModule.register({
      storage: getStorage('./media/gym'),
    }),
  ],
  controllers: [GymsController],
  providers: [GymsService]
})
export class GymsModule {}
