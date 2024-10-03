import { Prisma } from 'prisma/basic';
import { PrimitiveOnly } from 'src/util/types';

export type CreateEquipmentDto = PrimitiveOnly<Prisma.GymEquipmentCreateInput> & {bodyPartIds:number[]};