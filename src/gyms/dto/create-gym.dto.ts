import { Prisma } from 'prisma/basic';
import { PrimitiveOnly } from 'src/util/types';

export type CreateGymDto = PrimitiveOnly<Prisma.GymCreateInput>;
