import { PrimitiveOnly } from 'src/util/types';
import { Prisma } from "prisma/basic";

export type UpdateGymDto = PrimitiveOnly<Prisma.GymUpdateInput>;
