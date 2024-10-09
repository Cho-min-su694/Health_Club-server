import { PrimitiveOnly } from 'src/util/types';
import { Prisma } from "prisma/basic";

export type UpdateGymmembershipDto =  Omit<PrimitiveOnly<Prisma.GymMembershipUncheckedUpdateInput>,"id">;

export type UpdateGymmembershipCancellationDto = Omit<PrimitiveOnly<Prisma.GymMembershipCancellationUncheckedUpdateInput>,"id">;

export type UpdateGymAccessHistoryDto = PrimitiveOnly<Prisma.GymAccessHistoryUpdateInput>;