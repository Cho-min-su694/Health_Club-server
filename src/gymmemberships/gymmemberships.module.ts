import { Module } from '@nestjs/common';
import { GymmembershipsService } from './gymmemberships.service';
import { GymmembershipsController } from './gymmemberships.controller';

@Module({
  controllers: [GymmembershipsController],
  providers: [GymmembershipsService]
})
export class GymmembershipsModule {}
