import { Prisma } from 'prisma/basic';
import { PrimitiveOnly } from 'src/util/types';

export type CreateGymmembershipDto = Omit<PrimitiveOnly<Prisma.GymMembershipUncheckedCreateInput>,"id">;

export type CreateGymmembershipCancellationDto = Omit<PrimitiveOnly<Prisma.GymMembershipCancellationUncheckedCreateInput>,"id">;

export type CreateGymAccessHistoryDto = Omit<PrimitiveOnly<Prisma.GymAccessHistoryUncheckedCreateInput>,"id">;